// types
import { IDocuments } from '../interfaces/Document.interface.ts'

import { APICalls, APIResponse } from '../APICalls.ts'
const apiCalls: APICalls = new APICalls()

export class DocumentService {
  getEndpoint: string
  getHistoOfferEndpoint: string

  constructor() {
    this.getEndpoint = '/getDocuments.php'
    this.getHistoOfferEndpoint = '/getHistoOffer.php'
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

  async getHistoryOfferDocuments(
    userCredentials: { matricule: string; password: string },
    findDocuments: { refsource: string },
  ): Promise<IDocuments | null> {
    const params = {
      ...userCredentials,
      request: null,
      args: {
        findDocuments: {
          refsource: findDocuments.refsource,
        },
      },
    }
    try {
      const response: APIResponse<IDocuments> = await apiCalls.postRequest(
        this.getHistoOfferEndpoint,
        params,
      )
      return response['data']
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
