// types
import { IPartner } from '../interfaces/Partner.interface.ts'

import { APICalls, APIResponse } from '../APICalls.ts'
const apiCalls: APICalls = new APICalls()

export class PartnerService {
  getEndpoint: string

  constructor() {
    this.getEndpoint = '/getPartenairesInfos.php'
  }

  async getPartner(userCredentials: {
    matricule: string
    password: string
  }): Promise<IPartner[] | null> {
    const params = {
      ...userCredentials,
      request: null,
      args: null,
    }

    try {
      const response: APIResponse<IPartner[]> = await apiCalls.postRequest(
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
