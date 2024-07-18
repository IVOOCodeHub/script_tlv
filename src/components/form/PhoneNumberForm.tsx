// styles
import './phoneNumberForm.scss'

// types
import { ReactElement, ChangeEvent, FormEvent, MouseEvent } from 'react'
interface ISearchFiche {
  campaign: string
  ID?: string
  phone?: string
}

// components
import Button from '../button/Button'

// utils
import {
  formatPhoneNumber,
  removeDotsFromNumber,
} from '../../utils/scripts/Utils'

//hooks
import { useState } from 'react'

export default function PhoneNumberForm(): ReactElement {
  const [campaign, setCampaign] = useState<string>('APACVO')
  const [ID, setID] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const handleChangeCampaign = (
    select: ChangeEvent<HTMLSelectElement>,
  ): void => {
    const selectedCampaign: string = select.target.value
    setCampaign(selectedCampaign)
  }

  const handleChangePhone = (input: ChangeEvent<HTMLInputElement>): void => {
    const phoneNumber: string = formatPhoneNumber(input.target.value)
    setPhone(phoneNumber)
  }

  const handleChangeID = (input: ChangeEvent<HTMLInputElement>): void => {
    const ID: string = input.target.value
    setID(ID)
  }

  const handleSubmit = (
    event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>,
  ): void => {
    event.preventDefault()

    const findFile: ISearchFiche = {
      campaign: campaign,
      ID: ID,
      phone: removeDotsFromNumber(phone),
    }

    console.log(findFile)
  }

  return (
    <form id={'phoneNumberForm'} onSubmit={handleSubmit}>
      <h2>Ouvrir une fiche</h2>
      <div className={'inputWrapper'}>
        <label htmlFor={'campaign'}>Campagne de la fiche</label>
        <select
          name={'campaign'}
          onChange={(select: ChangeEvent<HTMLSelectElement>) =>
            handleChangeCampaign(select)
          }
        >
          <option value={'APACVO'}>APACVO</option>
          <option value={'CERAM'}>CERAM</option>
          <option value={'CHATAI'}>CHATAI</option>
          <option value={'CURIAZ'}>CURIAZ</option>
          <option value={'GOLFE'}>GOLFE</option>
          <option value={'MONTGU'}>MONTGU</option>
          <option value={'REVERZ'}>REVERZ</option>
          <option value={'VIMEU'}>VIMEU</option>
        </select>
      </div>
      <div className={'inputWrapper'}>
        <label htmlFor={'id'}>Clé de la fiche</label>
        <input
          type={'text'}
          placeholder={'Clé de la fiche'}
          name={'id'}
          onChange={(input: ChangeEvent<HTMLInputElement>) =>
            handleChangeID(input)
          }
        />
      </div>
      <p>Où</p>
      <div className={'inputWrapper'}>
        <label htmlFor={'phone'}>Téléphone de la fiche</label>
        <input
          type={'tel'}
          placeholder={'Numéro de téléphone'}
          name={'phone'}
          value={phone}
          onChange={(input: ChangeEvent<HTMLInputElement>) =>
            handleChangePhone(input)
          }
        />
      </div>
      <div className={'inputWrapper'}>
        <Button
          props={{
            textContent: 'Valider',
            onClick: (
              event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>,
            ) => handleSubmit(event),
          }}
        />
      </div>
    </form>
  )
}
