// types
import { MouseEvent, ReactElement } from 'react'

interface IButton {
  textContent: string
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ props }: { props: IButton }): ReactElement {
  return (
    <>
      <button className={'button'} onClick={props.onClick}>
        {props.textContent}
      </button>
    </>
  )
}
