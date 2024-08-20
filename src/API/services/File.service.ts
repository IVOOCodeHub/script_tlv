// types
import { IFile } from '../interfaces/File.interface.ts'

import { APICalls, APIResponse } from '../APICalls.ts'
const apiCalls: APICalls = new APICalls()

export class FileService {
  getEndpoint: string

  constructor() {
    this.getEndpoint = '/getFiles.php'
  }

  async getFile(
    userCredentials: { matricule: string; password: string },
    findFile: { campaign: string; ID?: string; phone?: string },
  ): Promise<IFile | null> {
    const params = {
      ...userCredentials,
      request: null,
      args: {
        findFile: { campaign: findFile.campaign, ID: findFile.ID, phone: findFile.phone },
      },
    }

    try {
      const response: APIResponse<IFile> = await apiCalls.postRequest(this.getEndpoint, params)
      return response['data']
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
