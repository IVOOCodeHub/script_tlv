// styles
import './calendarComponent.scss'
import 'react-calendar/dist/Calendar.css'

// types
import { ReactElement } from 'react'
type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]
interface CalendarComponentProps {
  onDateSelect: (date: string) => void
}

// hooks | libraries
import Calendar from 'react-calendar'
import { useState, useEffect } from 'react'

export default function CalendarComponent({
  onDateSelect,
}: CalendarComponentProps): ReactElement {
  const [value, onChange] = useState<Value | null>(null)

  useEffect((): void => {
    if(!value) return
    onDateSelect(value!.toString())
  }, [onDateSelect, value])

  return (
    <div id={'Calendar'}>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}
