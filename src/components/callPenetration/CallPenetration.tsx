// styles
import './callPenetration.scss'

// types
import { ReactElement } from 'react'

// hooks
import { useState } from 'react'

export default function CallPenetration(): ReactElement {
  const buttonTexts: string[] = [
    'Non traitée',
    'Identification',
    'Création de lien',
    'Sensibilisation',
    "Demande d'aide",
    'Commande',
  ]

  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  const handleMouseEnter = (index: number): void => {
    setHoverIndex(index)
  }

  return (
    <div id={'callPenetration'}>
      {buttonTexts.map((text: string, index: number) => (
        <button
          key={index}
          className={`penIndicator ${hoverIndex !== null && index <= hoverIndex ? 'valid' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          {text}
        </button>
      ))}
    </div>
  )
}
