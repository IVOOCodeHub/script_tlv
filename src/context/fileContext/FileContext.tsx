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
  campaign: string | null
}

// initContext
export const FileContext: Context<IFileContext> = createContext<IFileContext>({
  file: null,
  setFile: (): void => {},
  getFile: async (): Promise<IFile | null> => null,
  campaign: null,
})

// initProvider
export const FileProvider = ({
  children,
}: {
  children: ReactElement
}): ReactElement => {
  const [file, setFile] = useState<IFile | null>(null)
  const [campaign, setCampaign] = useState<string | null>(null)

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

      // every campaign name have a p at the end in dataBase. We remote it
      // to have the same name as the campaign name in the app.
      const convertCampaignName: string =findFile.campaign.slice(0, -1)
      setCampaign(convertCampaignName)
      console.log('campaign ->', convertCampaignName)
      console.log('fiche ->', res)
      return res
    } catch (error) {
      console.error('Failed to get file', error)
      return null
    }
  }

  return (
    <FileContext.Provider value={{ file, setFile, getFile, campaign }}>
      {children}
    </FileContext.Provider>
  )
}
