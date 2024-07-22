// styles
import './selectFile.scss'

// types
import { ReactElement, ChangeEvent, FormEvent, MouseEvent } from 'react'
import { NavigateFunction } from 'react-router-dom'
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
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// context
import { FileContext } from '../../context/fileContext/FileContext'

export default function SelectFile(): ReactElement {
  const [campaign, setCampaign] = useState<string>('apacvop')
  const [ID, setID] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const navigate: NavigateFunction = useNavigate()

  const { getFile } = useContext(FileContext)

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

  const handleSubmit = async (
    event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault()

    const findFile: ISearchFiche = {
      campaign: campaign,
      ID: ID,
      phone: removeDotsFromNumber(phone),
    }

    const userCredentials = {
      matricule: '6176',
      password: '9884',
    }
    await getFile(userCredentials, findFile)

    navigate('/landing')
  }

  return (
    <form id={'phoneNumberForm'} onSubmit={handleSubmit}>
      <h2>Monter une fiche</h2>
      <div className={'inputWrapper selectCampaign'}>
        <label htmlFor={'campaign'}>Campagne de la fiche</label>
        <select
          name={'campaign'}
          onChange={(select: ChangeEvent<HTMLSelectElement>) =>
            handleChangeCampaign(select)
          }
        >
          {/* value is the name of the database in SQL1 & SQL2 */}
          <option value={'apacvop'}>APACVO</option>
          <option value={'GOLFE2P'}>CERAM</option>
          <option value={'Montgup'}>CHATAI</option>
          <option value={'ceram0p'}>CURIAZ</option>
          <option value={'curiazp'}>GOLFE</option>
          <option value={'chataip'}>MONTGU</option>
          <option value={'vimeu0p'}>REVERZ</option>
          <option value={'reverzp'}>VIMEU</option>
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
