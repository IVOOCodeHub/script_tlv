// styles
import './whoAreWe.scss'

// types
import { ReactElement } from 'react'

// hooks
import { useContext, useEffect } from 'react'

// context
import { LoaderContext } from '../../context/LoaderContext/LoaderContext.tsx'
import { PartnerContext } from '../../context/partnerContext/PartnerContext.tsx'

// components
import Loader from '../loader/Loader'
import Button from '../button/Button'

export default function WhoAreWe({
  toggleWhoAreWe,
}: {
  toggleWhoAreWe: () => void
}): ReactElement {
  const { isLoading, startLoading, stopLoading } = useContext(LoaderContext)
  const { partner, getPartner } = useContext(PartnerContext)

  useEffect((): void => {
    if (!partner) {
      searchPartnair()
    }
  }, [])

  const searchPartnair = async (): Promise<void> => {
    startLoading()
    const userCredentials: { matricule: string; password: string } = {
      matricule: '6176',
      password: '9884',
    }

    await getPartner(userCredentials)
    stopLoading()
  }

  return (
    <section id={'whoAreWe'}>
      <h2>Qui sommes-nous ?</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <blockquote>{partner?.txtquisommesnous}</blockquote>
      )}
      <div className={'buttonWrapper'}>
        <Button props={{ textContent: 'Retour', onClick: toggleWhoAreWe }} />
      </div>
    </section>
  )
}
