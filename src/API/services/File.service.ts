import { APICalls } from '../APICalls.ts'
const apiCalls: APICalls = new APICalls()

export class FileService {
  getEndpoint: string

  constructor() {
    this.getEndpoint = '/getFile.php'
  }

  async getFile(
    userCredentials: { code: string; password: string },
    findFile: { campaign: string; ID?: string; phone?: string },
  ) {
    const params = {
      ...userCredentials,
      request: null,
      args: {
        findFile: { campaign: findFile.campaign, ID: findFile.ID },
      },
    }

    try {
      const response = await apiCalls.postRequest(this.getEndpoint, params)
      return response['data']
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
