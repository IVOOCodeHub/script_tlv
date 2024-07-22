// styles
import './updateFileInfos.scss'

// types
import { ReactElement } from 'react'

// hooks
import { useContext } from 'react'

// context
import { FileContext } from '../../context/fileContext/FileContext'

export default function UpdateFileInfos(): ReactElement {
  const { file } = useContext(FileContext)

  return (
    <>
      {file && (
        <form id={'UpdateFileInfos'}>
          <div className={'inputContainer'}>
            <label>Contact</label>
            <select defaultValue={file.civiliteres}>
              <option value={'Madame'}>Madame</option>
              <option value={'Mademoiselle'}>Mademoiselle</option>
              <option value={'Monsieur'}>Monsieur</option>
            </select>
            <input
              type={'text'}
              defaultValue={file.nomres}
              placeholder={'Veuillez renseigner nom du contact ici'}
            />
          </div>
          <div className={'inputContainer'}>
            <label>Commentaires :</label>
            <textarea
              placeholder={
                'Veuillez renseigner les commentaires éventuels ici.'
              }
            >{file.infoto}</textarea>
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
      )}
    </>
  )
}
