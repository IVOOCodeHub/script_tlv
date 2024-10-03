// styles
import './callCard.scss'

// assets | icons
import { FaLongArrowAltDown } from 'react-icons/fa'
import { GrFormNextLink } from 'react-icons/gr'
import { MdOutlineRestartAlt } from 'react-icons/md'

// types
import { ReactElement, ReactNode, Dispatch, SetStateAction } from 'react'
export interface ICallCardProps {
  data: {
    title: string
    objective: ReactNode
    action?: ReactNode
    discourse: ReactNode
  }
  callPlanIndex: number
  setCallPlanIndex: Dispatch<SetStateAction<number>>
}

export default function CallCard({
  data,
  callPlanIndex,
  setCallPlanIndex,
}: ICallCardProps): ReactElement {
  const handleNextClick: () => void = (): void => {
    setCallPlanIndex(callPlanIndex + 1)
  }

  return (
    <>
      {data && (
        <section id={'callCardContainer'}>
          <ul className={'callCardWrapper'}>
            <li>
              <h2>{callPlanIndex + 1}</h2>
              <h3>{data.title}</h3>
            </li>
            <FaLongArrowAltDown className={'arrowDown'} />
            <li>{data.objective}</li>
            {data.action && (
              <>
                <FaLongArrowAltDown className={'arrowDown'} />
                <li>{data.action}</li>
              </>
            )}
          </ul>
          <article>
            {data.discourse}
            {callPlanIndex <= 6 ? (
              <GrFormNextLink
                className={'nextLink'}
                onClick={handleNextClick}
              />
            ) : (
              <MdOutlineRestartAlt
                className={'nextLink'}
                onClick={():void => setCallPlanIndex(0)}
              />
            )}
          </article>
        </section>
      )}
    </>
  )
}
