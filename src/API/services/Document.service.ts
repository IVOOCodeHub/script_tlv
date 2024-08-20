// types
import { IDocuments } from '../interfaces/Document.interface.ts'

import { APICalls, APIResponse } from '../APICalls.ts'
const apiCalls: APICalls = new APICalls()

export class DocumentService {
  getEndpoint: string

  constructor() {
    this.getEndpoint = '/getDocuments.php'
  }

  async getDocuments(
    userCredentials: { matricule: string; password: string },
    findDocuments: { campaign: string; fileID: string },
  ): Promise<IDocuments | null> {
    const params = {
      ...userCredentials,
      request: null,
      args: {
        findDocuments: {
          campaign: findDocuments.campaign,
          fileID: findDocuments.fileID,
        },
      },
    }
    try {
      const response: APIResponse<IDocuments> = await apiCalls.postRequest(
        this.getEndpoint,
        params,
      )
      return response['data']
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
