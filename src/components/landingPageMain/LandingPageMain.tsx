// styles
import './landingPageMain.scss'

// types
import { ReactElement } from 'react'

// components
import StatusButtons from '../statusButtons/StatusButtons'
import UpdateFileInfos from '../updateFileInfos/UpdateFileInfos'
import Calendar from '../calendar/CalendarComponent.tsx'
import QuickRDV from '../quickRDV/QuickRDV.tsx'

export default function LandingPageMain({
  setSelectedDate,
  selectedDate,
}: {
  setSelectedDate: (date: string) => void
  selectedDate: string
}): ReactElement {
  return (
    <section id={'landingMain'}>
      <div className={'leftContainer'}>
        <StatusButtons />
      </div>
      <div className={'rightContainer'}>
        <UpdateFileInfos />
        <Calendar onDateSelect={setSelectedDate} />
        <QuickRDV selectedDate={selectedDate} />
      </div>
    </section>
  )
}
