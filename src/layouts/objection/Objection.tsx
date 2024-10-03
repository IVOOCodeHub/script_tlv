// styles
import './objection.scss'

// types
import { ReactElement } from 'react'

// hooks
import { useState } from 'react'

// components
import ObjectionCard from '../../components/objectionCard/ObjectionCard'

// cards contents
import { objectionsContent } from '../../components/objectionCard/objectionsContent.tsx'

export default function Objection(): ReactElement {
  const [objectionIndex, setObjectionIndex] = useState<number>(6)

  const toggleObjection: (index: number) => void = (index: number): void => {
    setObjectionIndex(index)
  }

  return (
    <main id="objections">
      <h1>Objections</h1>
      <section className="buttonWrapper">
        {objectionsContent.map((objection, index: number): ReactElement => {
          return (
            <button
              key={index}
              onClick={(): void => toggleObjection(index)}
              className={objectionIndex === index ? 'active' : ''}
            >
              {objection.name}
            </button>
          )
        })}
      </section>
      <ObjectionCard datas={objectionsContent[objectionIndex]} />
    </main>
  )
}
