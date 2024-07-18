// styles
import './statusButtons.scss'

// types
import { ReactElement, MouseEvent } from 'react'

// components
import Button from '../button/Button'

export default function StatusButtons(): ReactElement {
  const firstColumnButtons: string[] = [
    'Fax',
    'Faillite',
    'Barrière secrétaire',
    'Répondeur',
  ]
  const secondColumnButtons: string[] = [
    'Plus attribué',
    'Résidentiel',
    'Indisponible',
    'Siège',
  ]
  const thirdColumnButtons: string[] = ['Doublon', 'R S S']

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    console.log(event.currentTarget.textContent)
  }

  return (
    <div id={'statusButtons'}>
      <div className={'leftContainer'}>
        {firstColumnButtons.map((buttonText: string) => (
          <Button
            props={{
              textContent: buttonText,
              onClick: (event: MouseEvent<HTMLButtonElement>) =>
                handleClick(event),
            }}
          />
        ))}
      </div>
      <div className={'middleContainer'}>
        {secondColumnButtons.map((buttonText: string) => (
          <Button
            props={{
              textContent: buttonText,
              onClick: (event: MouseEvent<HTMLButtonElement>) =>
                handleClick(event),
            }}
          />
        ))}
      </div>
      <div className={'rightContainer'}>
        {thirdColumnButtons.map((buttonText: string) => (
          <Button
            props={{
              textContent: buttonText,
              onClick: (event: MouseEvent<HTMLButtonElement>) =>
                handleClick(event),
            }}
          />
        ))}
      </div>
    </div>
  )
}
