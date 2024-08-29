// hooks
import { createContext, useState } from 'react'

// services
import { TOService } from '../../API/services/TO.service.ts'
const toService: TOService = new TOService()

// types
import { ReactElement, Context, Dispatch, SetStateAction } from 'react'
import { ITO, ITOHistoCalls } from '../../API/interfaces/TO.interface.ts'

export interface ITOContext {
  TO: ITO | null
  setTO: Dispatch<SetStateAction<ITO | null>>
  getTO: (userCredentials: {
    matricule: string
    password: string
  }) => Promise<ITO | null>
  TOHistoCalls: ITOHistoCalls[] | null
  setTOHistoCalls: Dispatch<SetStateAction<ITOHistoCalls[] | null>>
  getTOHistoCalls: (
    userCredentials: {
      matricule: string
      password: string
    },
    args: {
      codeprospect: string
      campaign: string
    },
  ) => Promise<ITOHistoCalls[] | null>
}

// initContext
export const TOContext: Context<ITOContext> = createContext<ITOContext>({
  TO: null,
  setTO: (): void => {},
  getTO: async (): Promise<ITO | null> => null,
  TOHistoCalls: null,
  setTOHistoCalls: (): void => {},
  getTOHistoCalls: async (): Promise<ITOHistoCalls[] | null> => null,
})

// initProvider
export const TOProvider = ({
  children,
}: {
  children: ReactElement
}): ReactElement => {
  const [TO, setTO] = useState<ITO | null>(null)
  const [TOHistoCalls, setTOHistoCalls] = useState<ITOHistoCalls[] | null>(null)

  const getTO = async (userCredentials: {
    matricule: string
    password: string
  }): Promise<ITO | null> => {
    try {
      const res: ITO | null = await toService.getTO(userCredentials)
      setTO(res)

      console.log('TO ->', res)

      return res
    } catch (error) {
      console.error(`Failed to get TO : ${error}`)
      return null
    }
  }

  const getTOHistoCalls = async (
    userCredentials: {
      matricule: string
      password: string
    },
    args: {
      codeprospect: string
      campaign: string
    },
  ): Promise<ITOHistoCalls[] | null> => {
    try {
      const res: ITOHistoCalls[] | null = await toService.getTOHistoCalls(
        userCredentials,
        args,
      )

      if (res!.length === 0) return null // avoid errors when no data

      setTOHistoCalls(res)

      console.log('TOHistoCalls ->', res)

      return res
    } catch (error) {
      console.error(`Failed to get TOHistoCalls : ${error}`)
      return null
    }
  }

  return (
    <TOContext.Provider
      value={{
        TO: TO,
        setTO: setTO,
        getTO: getTO,
        TOHistoCalls: TOHistoCalls,
        setTOHistoCalls: setTOHistoCalls,
        getTOHistoCalls: getTOHistoCalls,
      }}
    >
      {children}
    </TOContext.Provider>
  )
}
