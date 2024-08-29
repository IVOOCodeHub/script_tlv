// types
import { ITO, ITOHistoCalls } from '../interfaces/TO.interface.ts'

// API
import { APICalls, APIResponse } from '../APICalls.ts'
const apiCalls: APICalls = new APICalls()

export class TOService {
  getTOEndpoint: string
  getHistoCallsEndpoint: string
  getHistoOfferEndpoint: string

  constructor() {
    this.getTOEndpoint = '/getTO.php'
    this.getHistoCallsEndpoint = '/getHistoCalls.php'
    this.getHistoOfferEndpoint = '/getHistoOffers.php'
  }

  async getTO(userCredentials: {
    matricule: string
    password: string
  }): Promise<ITO | null> {
    const params = {
      ...userCredentials,
      request: null,
      args: null,
    }

    try {
      const response: APIResponse<ITO> = await apiCalls.postRequest(
        this.getTOEndpoint,
        params,
      )
      return response['data']
    } catch (error) {
      throw error
    }
  }

  async getTOHistoCalls(userCredentials: {
    matricule: string
    password: string
  }, args: {
    codeprospect: string
    campaign: string
  }): Promise<ITOHistoCalls[] | null> {
    const params = {
      ...userCredentials,
      request: null,
      args: args
    }

    try {
      const response: APIResponse<ITOHistoCalls[]> = await apiCalls.postRequest(
        this.getHistoCallsEndpoint,
        params,
      )
      return response['data']
    } catch (error) {
      throw error
    }
  }
}
