// styles
import './objection.scss'

// types
import { ReactElement } from 'react'

// hooks
import { useState } from 'react'

// components
import ObjectionCard from '../../components/objectionCard/ObjectionCard'

// cardsContents
import { objectionsContent } from '../../components/objectionCard/objectionsContent.tsx'

export default function Objection(): ReactElement {
  const [objectionIndex, setObjectionIndex] = useState<number>(6)

  const toggleObjection = (index: number) => {
    setObjectionIndex(index)
  }

  return (
    <main id="objections">
      <h1>Objections</h1>
      <section className="buttonWrapper">
        {objectionsContent.map((objection, index: number) => {
          return (
            <button
              key={index}
              onClick={() => toggleObjection(index)}
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
