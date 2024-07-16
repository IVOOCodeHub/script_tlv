// styles
import './updateFileInfos.scss'

// types
import { ReactElement } from 'react'

export default function UpdateFileInfos(): ReactElement {
 const inputName: string = 'Dudul'

  return (
    <form id={'UpdateFileInfos'}>
      <div className={'inputContainer'}>
        <label>Contact</label>
        <select defaultValue={'Monsieur'}>
          <option value={'Madame'}>Madame</option>
          <option value={'Mademoiselle'}>Mademoiselle</option>
          <option value={'Monsieur'}>Monsieur</option>
        </select>
        <input type={'text'} defaultValue={inputName} placeholder={'Veuillez renseigner nom du contact ici'} />
      </div>
      <div className={'inputContainer'}>
        <label>Commentaires : SUSP</label>
        <textarea placeholder={'Veuillez renseigner les commentaires éventuels ici.'}></textarea>
      </div>
      <div className={'inputContainer'}>
        <label>Commande à établir ?</label>
        <select>
          <option>Choisir</option>
          <option>Non</option>
          <option>Oui</option>
        </select>
      </div>
    </form>
  )
}
