// hooks
import { createContext, useState } from 'react'

// services
import { FileService } from '../../API/services/File.service.ts'
const fileService: FileService = new FileService()

// types
import { IFile } from '../../API/interfaces/File.interface.ts'
import { ReactElement, Context, Dispatch, SetStateAction } from 'react'

export interface IFileContext {
  file: IFile | null
  setFile: Dispatch<SetStateAction<IFile | null>>
  getFile: (
    userCredentials: { matricule: string; password: string },
    findFile: {
      campaign: string
      ID?: string | undefined
      phone?: string | undefined
    },
  ) => Promise<IFile | null>
}

// initContext
export const FileContext: Context<IFileContext> = createContext<IFileContext>({
  file: null,
  setFile: (): void => {},
  getFile: async (): Promise<IFile | null> => null,
})

// initProvider
export const FileProvider = ({
  children,
}: {
  children: ReactElement
}): ReactElement => {
  const [file, setFile] = useState<IFile | null>(null)

  const getFile = async (
    userCredentials: { matricule: string; password: string },
    findFile: {
      campaign: string
      ID?: string | undefined
      phone?: string | undefined
    },
  ): Promise<IFile | null> => {
    try {
      const res: IFile | null = await fileService.getFile(
        userCredentials,
        findFile,
      )
      setFile(res)
      console.log('res –>', res)
      return res
    } catch (error) {
      console.error('Failed to get file', error)
      return null
    }
  }

  return (
    <FileContext.Provider value={{ file, setFile, getFile }}>
      {children}
    </FileContext.Provider>
  )
}
