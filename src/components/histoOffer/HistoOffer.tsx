// styles
import './histoOffer.scss'

// types
import { ReactElement } from 'react'

// components
import Button from '../button/Button'

export default function HistoOffer({
  toggleHistoOffer,
}: {
  toggleHistoOffer: () => void
}): ReactElement {
  return (
    <section id={'histoOffer'}>
      <h2>Historique offres</h2>
      <div className={'buttonWrapper'}>
        <Button props={{textContent: 'Retour', onClick: toggleHistoOffer}} />
      </div>
    </section>
  )
}