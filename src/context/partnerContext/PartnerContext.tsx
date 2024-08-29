// hooks
import { createContext, useContext, useState } from 'react'

// services
import { PartnerService } from '../../API/services/Partner.service.ts'
const partnerService: PartnerService = new PartnerService()

// types
import { ReactElement, Context, Dispatch, SetStateAction } from 'react'
import { IPartner } from '../../API/interfaces/Partner.interface.ts'

// context
import { FileContext } from '../fileContext/FileContext'

export interface IPartnairContext {
  partner: IPartner | null
  setPartner: Dispatch<SetStateAction<IPartner | null>>
  getPartner: (userCredentials: {
    matricule: string
    password: string
  }) => Promise<IPartner | null>
}

// initContext
export const PartnerContext: Context<IPartnairContext> =
  createContext<IPartnairContext>({
    partner: null,
    setPartner: (): void => {},
    getPartner: async (): Promise<IPartner | null> => null,
  })

// initProvider
export const PartnerProvider = ({
  children,
}: {
  children: ReactElement
}): ReactElement => {
  const [partner, setPartner] = useState<IPartner | null>(null)
  const { campaign } = useContext(FileContext)

  const getPartner = async (userCredentials: {
    matricule: string
    password: string
  }): Promise<IPartner | null> => {
    try {
      const res: IPartner[] | null =
        await partnerService.getPartner(userCredentials)
      const filteredPartner =
        res?.find(
          (partner) =>
            partner.codecampagne.toLowerCase() === campaign?.toLowerCase(),
        ) ?? null

      setPartner(filteredPartner)

      console.log('partner ->', filteredPartner)

      return filteredPartner
    } catch (error) {
      console.error(`Failed to get partner : ${error}`)
      return null
    }
  }

  return (
    <PartnerContext.Provider
      value={{
        partner: partner,
        setPartner: setPartner,
        getPartner: getPartner,
      }}
    >
      {children}
    </PartnerContext.Provider>
  )
}
