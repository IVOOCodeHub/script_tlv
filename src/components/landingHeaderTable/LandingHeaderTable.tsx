// style
import './landingHeaderTable.scss'

// types
import { ReactElement } from 'react'

export default function LandingHeaderTable(): ReactElement {
  return (
    <section id={'landingHeaderTable'}>
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
            <td>5</td>
            <td>Monsieur DUDUL</td>
            <td>Mairies</td>
            <td>Nord</td>
            <td>05/05/2015</td>
          </tr>
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
    </section>
  )
}
