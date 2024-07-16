// types
import { ReactElement } from 'react'

interface IButton {
  textContent: string
  onClick: () => void
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
