// styles
import './objectionCard.scss'

// types
import { ReactElement, ReactNode } from 'react'
export interface IObjectionCardProps {
  datas: {
    name: string
    reformulation: ReactNode
    stepForward: ReactNode
    answer: ReactNode
    keepArgumentation: ReactNode
  }
}

export default function ObjectionCard({
  datas,
}: IObjectionCardProps): ReactElement {
  return (
    <section id={`objectionCardContainer`}>
      <ul>
        <li>
          <p>1/ Reformuler : </p>
          {datas.reformulation}
        </li>
        <li>
          <p>2/ Faire un pas vers l'interlocuteur : </p>
          {datas.stepForward}
        </li>
        <li>
          <p>
            3/ Répondre à l'objection et y amener une contrepartie positive :{' '}
          </p>
          {datas.answer}
        </li>
        <li>
          <p>4/ Revenir dans l'argumentation : </p>
          {datas.keepArgumentation}
        </li>
      </ul>
    </section>
  )
}
