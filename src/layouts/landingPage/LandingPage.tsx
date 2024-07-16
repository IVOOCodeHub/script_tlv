// styles
import './landingPage.scss'

// types
import { ReactElement } from 'react'

// hooks
import { useState, useEffect } from 'react'

// components
import Clock from '../../components/clock/Clock'
import Button from '../../components/button/Button'
import LandingHeaderTable from '../../components/landingHeaderTable/LandingHeaderTable.tsx'

export default function LandingPage(): ReactElement {
  // todo : remplace mockup with real data
  const [ficheType, setFicheType] = useState<string>('')

  useEffect(() => {
    setFicheType('client')
  }, [])

  const defineBackground = (): string => {
    switch (ficheType) {
      case 'alreadyCalled':
        return 'alreadyCalledBackground'
      case 'neverCalled':
        return 'neverCalledBackground'
      case 'recycled':
        return 'recycledBackground'
      default:
        return 'clientBackground'
    }
  }

  return (
    <article id={'landingPage'}>
      <section id={'landingHeader'} className={defineBackground()}>
        <div className={'leftContainer'}>
          <Clock />
          <div className={'buttonWrapper'}>
            <Button
              props={{
                textContent: 'Qui est-ce ?',
                onClick: () => {},
              }}
            />
            <Button
              props={{
                textContent: 'Qui sommes-nous ?',
                onClick: () => {},
              }}
            />
          </div>
        </div>

        <div className={'middleContainer'}>
          <h1>EA ACVO</h1>
          <LandingHeaderTable  />
        </div>

        <div className={'rightContainer'}>
          <div className={'buttonWrapper'}>
            <Button
              props={{
                textContent: 'Historique appels',
                onClick: () => {},
              }}
            />
            <Button
              props={{
                textContent: 'Historique offres',
                onClick: () => {},
              }}
            />
          </div>
        </div>
      </section>
    </article>
  )
}
