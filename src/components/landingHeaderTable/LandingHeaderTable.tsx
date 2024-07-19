// style
import './landingHeaderTable.scss'

// types
import { ReactElement } from 'react'

// hooks
import { useContext } from 'react'

// context
import { FileContext } from '../../context/fileContext/FileContext'

export default function LandingHeaderTable(): ReactElement {
  const { file } = useContext(FileContext)

  console.log(file)

  return (
    <div id={'landingHeaderTable'}>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Contact</th>
            <th>Activité</th>
            <th>Région</th>
            <th>Dernier appel</th>
          </tr>
        </thead>
        <tbody>
          {file && (
            <tr>
              <td>{file.code}</td>
              <td>{file.civiliteres}{' '}{file.nomres}</td>
              <td>{file.activite}</td>
              <td>Nord</td>
              <td>05/05/2015</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={'bottomContainer'}>
        <p className={'progressBar'}></p>
        <p className={'progressBar'}></p>
        <p className={'progressBar'}></p>
        <p className={'progressBar'}></p>
        <p className={'progressBar'}>5</p>
        <p>Progression maxi du PA atteinte le 08/11/2018 14:40</p>
      </div>
    </div>
  )
}
