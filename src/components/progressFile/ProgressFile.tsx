// styles
import './progressFile.scss'

// types
import { ReactElement } from 'react'

// utils
import { formatDateForDisplayWithTime } from '../../utils/scripts/Utils'

export default function ProgressFile({
  progressMax,
  dateProgressMax,
}: {
  progressMax: number
  dateProgressMax: string
}): ReactElement | null {
  const validClass: string = 'validClass'
  const notValidClass: string = 'notValidClass'

  const getClass = (index: number): string => {
    return index < progressMax ? validClass : notValidClass
  }

  const getContent = (index: number): string => {
    return index === progressMax - 1 ? `${index + 1}` : ''
  }

  return (
    <div className={'bottomContainer'}>
      {[...Array(5)].map((_, index: number) => (
        <p key={index} className={`progressBar ${getClass(index)}`}>
          {getContent(index)}
        </p>
      ))}
      <p>
        Progression maxi du PA atteinte le{' '}
        {formatDateForDisplayWithTime(dateProgressMax)}
      </p>
    </div>
  )
}
