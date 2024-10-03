// styles
import './callPlan.scss'

// types
import { ReactElement } from 'react'

// hooks
import { useState } from 'react'

// components
import CallCard from '../../components/callCard/CallCard'

// cards contents
import { callPlanContent } from '../../components/callCard/callPlanContent.tsx'

export default function CallPlan(): ReactElement {
  const [callPlanIndex, setCallPlanIndex] = useState<number>(0)

  const toggleCallPlan: (callPlanIndex: number) => void = (
    callPlanIndex: number,
  ): void => {
    setCallPlanIndex(callPlanIndex)
  }

  return (
    <main id={'callPlan'}>
      <div className={'titleContainer'}>
        <h1>Plan d'appel</h1>
        <blockquote>(Remplacez les mots en grisé)</blockquote>
      </div>
      <section className={'buttonWrapper'}>
        {callPlanContent.map((callPlan, index: number): ReactElement => {
          return (
            <button
              key={index}
              onClick={(): void => toggleCallPlan(index)}
              className={callPlanIndex === index ? 'active' : ''}
            >
              {callPlan.title}
            </button>
          )
        })}
      </section>
      <CallCard
        data={callPlanContent[callPlanIndex]}
        callPlanIndex={callPlanIndex}
        setCallPlanIndex={setCallPlanIndex}
      />
    </main>
  )
}
