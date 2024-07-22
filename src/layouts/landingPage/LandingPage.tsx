// styles
import './landingPage.scss'

// types
import { ReactElement } from 'react'
import { NavigateFunction } from 'react-router-dom'

// hooks
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// context
import { FileContext } from '../../context/fileContext/FileContext.tsx'

// components
import Clock from '../../components/clock/Clock'
import Button from '../../components/button/Button'
import LandingHeaderTable from '../../components/landingHeaderTable/LandingHeaderTable'
import UpdateFileInfos from '../../components/updateFileInfos/UpdateFileInfos'
import Calendar from '../../components/calendar/CalendarComponent.tsx'
import QuickRDV from '../../components/quickRDV/QuickRDV.tsx'
import StatusButtons from '../../components/statusButtons/StatusButtons'
import CallPenetration from '../../components/callPenetration/CallPenetration'

export default function LandingPage(): ReactElement {
  const [ficheType, setFicheType] = useState<string | undefined>('')
  const [selectedDate, setSelectedDate] = useState<string>('')

  const { file } = useContext(FileContext)
  const navigate: NavigateFunction = useNavigate()

  useEffect((): void => {
    if (!file || !file.code) {
      navigate('/auth')
    }
  }, [])

  useEffect(() => {
    setFicheType(file?.qualite)
  }, [])

  const defineBackground = (): string => {
    switch (ficheType) {
      case 'alreadyCalled':
        return 'alreadyCalledBackground'
      case 'neverCalled':
        return 'neverCalledBackground'
      case 'recycled':
        return 'recycledBackground'
      case 'CLI' :
        return 'clientBackground'
      default:
        return 'neverCalledBackground'
    }
  }

  return (
    <main id={'landingPage'}>
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
          <LandingHeaderTable />
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

      <section id={'landingMain'}>
        <div className={'leftContainer'}>
          <StatusButtons />
        </div>
        <div className={'rightContainer'}>
          <UpdateFileInfos />
          <Calendar onDateSelect={setSelectedDate} />
          <QuickRDV selectedDate={selectedDate} />
        </div>
      </section>

      <section id={'landingFooter'} className={defineBackground()}>
        <div className={'leftContainer'}>
          <Button
            props={{ textContent: 'Objection', onClick: (): void => {} }}
          />
          <Button
            props={{ textContent: "Plan d'appel", onClick: (): void => {} }}
          />
        </div>
        <div className={'rightContainer'}>
          <div className={'topWrapper'}>
            <Button
              props={{ textContent: 'Commande', onClick: (): void => {} }}
            />
          </div>
          <div className={'bottomWrapper'}>
            <CallPenetration />
          </div>
        </div>
      </section>
    </main>
  )
}
