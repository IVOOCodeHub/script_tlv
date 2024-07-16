// styles
import './clock.scss'

// types
import { ReactElement } from 'react'

// hooks
import { useState, useEffect } from 'react'

export default function Clock(): ReactElement {
  const [time, setTime] = useState<Date>(new Date())

  useEffect((): void => {
    const intervalID: number = setInterval(() => {
      setTime(new Date())

      return () => clearInterval(intervalID) // avoid memory leaks
    }, 1000) // update the component every seconds
  }, [])

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }

  const timeString: string = time.toLocaleTimeString('fr-FR', options)

  return (
    <div className={'clockContainer'}>
      <p className={'clock'}>{timeString}</p>
    </div>
  )
}
