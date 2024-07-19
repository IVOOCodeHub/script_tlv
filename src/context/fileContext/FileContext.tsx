// types
import { File } from '../../API/models/File.model.ts'
import { ReactElement, Context, Dispatch, SetStateAction } from 'react'
export interface IFileContext {
  file: File
  setFile: Dispatch<SetStateAction<File | null>>
  getFile: () => Promise<File>
}

// hooks
import { createContext, useState } from 'react'

// services
import { FileService } from '../../API/services/File.service.ts'
const fileService: FileService = new FileService()

// initContext
export const FileContext: Context<IFileContext> = createContext({
  file: File,
  setFile: (): void => {},
  getFile: async (userCredentials, findFile): Promise<File> => {},
})

// initProvider
export const FileProvider = ({
  children,
}: {
  children: ReactElement
}): void => {
  const [file, setFile] = useState<File>()

  const getFile = async (userCredentials, findFile) => {
    try {
      const res: File = await fileService.getFile(userCredentials, findFile)
      setFile(res)
      console.log(res)
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
