// style
import './landingHeaderTable.scss'

// types
import { ReactElement } from 'react'

// hooks
import { useContext } from 'react'

// context
import { FileContext } from '../../context/fileContext/FileContext'

// components
import ProgressFile from '../progressFile/ProgressFile'

// utils
import { formatDateForDisplay } from '../../utils/scripts/Utils'

export default function LandingHeaderTable(): ReactElement {
  const { file } = useContext(FileContext)

  return (
    <div id={'landingHeaderTable'}>
      {file && (
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
            <tr>
              <td>{file.code}</td>
              <td>
                {file.civilitecon} {file.nomcon}
              </td>
              <td>{file.activite}</td>
              <td>{file.region}</td>
              <td>{formatDateForDisplay(file.datdermontee)}</td>
            </tr>
          </tbody>
        </table>
      )}
      {file && (
        <ProgressFile
          progressMax={parseInt(file!.maxprogpaperiode)}
          dateProgressMax={file!.dh_maxprogpaperiode}
        />
      )}
    </div>
  )
}
