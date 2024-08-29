// styles
import './whoAreWe.scss'

// types
import { ReactElement } from 'react'

// hooks
import { useContext, useEffect } from 'react'

// context
import { PartnerContext } from '../../context/partnerContext/PartnerContext.tsx'

import Button from '../button/Button'

export default function WhoAreWe({
  toggleWhoAreWe,
}: {
  toggleWhoAreWe: () => void
}): ReactElement {
  const { partner, getPartner } = useContext(PartnerContext)

  useEffect((): void => {
    if (!partner) {
      searchPartnair()
    }
  }, [])

  const searchPartnair = async (): Promise<void> => {
    const userCredentials: { matricule: string; password: string } = {
      matricule: '6176',
      password: '9884',
    }

    await getPartner(userCredentials)
  }

  return (
    <section id={'whoAreWe'}>
      <h2>Qui sommes-nous ?</h2>
      <blockquote>{partner?.txtquisommesnous}</blockquote>
      <div className={'buttonWrapper'}>
        <Button props={{ textContent: 'Retour', onClick: toggleWhoAreWe }} />
      </div>
    </section>
  )
}
