// styles
import './quickRDV.scss'

// types
import { ReactElement, ChangeEvent } from 'react'
interface QuickRDVProps {
  selectedDate: string
}

// hooks
import { useState, useEffect } from 'react'

// components
import Button from '../button/Button'

export default function QuickRDV({
  selectedDate,
}: QuickRDVProps): ReactElement {
  const [date, setDate] = useState<string>('')
  const [contactNumber, setContactNumber] = useState<string>('')

  useEffect((): void => {
    if (selectedDate) {
      const date: Date = new Date(selectedDate)
      date.setDate(date.getDate() +1)
      const formattedDate: string = date.toISOString().split('T')[0]
      setDate(formattedDate)
    }
  }, [selectedDate])

  const getDateWithOffset = (offset: number): void => {
    const targetDate: Date = new Date()
    targetDate.setDate(targetDate.getDate() + offset)
    const formattedDate: string = targetDate.toISOString().split('T')[0]
    setDate(formattedDate)
  }

  const removeDate = (): void => {
    setDate('')
  }

  const formatPhoneNumber = (input: string): string => {
    const digits: string = input.replace(/\D/g, '')
    return digits.replace(/(\d{2})(?=\d)/g, '$1.')
  }

  const handleContactNumberChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    const formattedNumber: string = formatPhoneNumber(event.target.value)
    setContactNumber(formattedNumber)
  }

  return (
    <div id={'quickRDV'}>
      <div className={'topContainer'}>
        <div className={'buttonWrapper'}>
          <input type={'date'} value={date} readOnly />
          <Button
            props={{
              textContent: 'Effacer',
              onClick: (): void => {
                removeDate()
              },
            }}
          />
        </div>
        <form>
          <label>Nouveau téléphone :</label>
          <input
            type={'tel'}
            placeholder={'N° de contact'}
            value={contactNumber}
            onChange={handleContactNumberChange}
          />
        </form>
      </div>
      <div className={'bottomContainer'}>
        <div className={'buttonWrapper'}>
          <Button
            props={{
              textContent: "Aujourd'hui",
              onClick: (): void => {
                getDateWithOffset(0)
              },
            }}
          />
          <Button
            props={{
              textContent: 'Demain',
              onClick: (): void => {
                getDateWithOffset(1)
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}
