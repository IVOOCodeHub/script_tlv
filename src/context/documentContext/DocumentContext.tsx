// hooks
import { createContext, useState } from 'react'

// services
import { DocumentService } from '../../API/services/Document.service'
const documentService: DocumentService = new DocumentService()

// types
import { ReactElement, Context, Dispatch, SetStateAction } from 'react'
import {
  IDocument,
  IDocuments,
} from '../../API/interfaces/Document.interface.ts'

export interface IDocumentContext {
  documents: IDocuments | null
  setDocuments: Dispatch<SetStateAction<IDocuments | null>>
  getDocuments: (
    userCredentials: { matricule: string; password: string },
    findDocument: {
      campaign: string
      fileID: string
    },
  ) => Promise<IDocuments | null>
  calculateCAHT: () => number
}

// initContext
export const DocumentContext: Context<IDocumentContext> =
  createContext<IDocumentContext>({
    documents: null,
    setDocuments: (): void => {},
    getDocuments: async (): Promise<IDocuments | null> => null,
    calculateCAHT: (): number => 0,
  })

// initProvider
export const DocumentProvider = ({
  children,
}: {
  children: ReactElement
}): ReactElement => {
  const [documents, setDocuments] = useState<IDocuments | null>(null)

  const getDocuments = async (
    userCredentials: { matricule: string; password: string },
    findDocuments: {
      campaign: string
      fileID: string
    },
  ): Promise<IDocuments | null> => {
    try {
      const res: IDocuments | null = await documentService.getDocuments(
        userCredentials,
        findDocuments,
      )
      setDocuments(res)
      return res
    } catch (error) {
      console.error(`Failed to get File : ${error}`)
      return null
    }
  }

  const calculateCAHT = (): number => {
    const orders: Array<number> = []
    if (documents) {
      documents.forEach((doc: IDocument): void => {
        orders.push(parseFloat(doc['tnht']))
      })
    }
    const caSum: number = orders.reduce(
      (total: number, value: number): number => {
        return total + value
      },
      0,
    )

    return parseFloat(caSum.toFixed(2))
  }

  return (
    <DocumentContext.Provider value={{ documents, setDocuments, getDocuments, calculateCAHT }}>
      {children}
    </DocumentContext.Provider>
  )
}
