// styles
import './histoCalls.scss'

// utils
import {
  formatCampaignNameForBackEnd,
  formatDateForDisplay,
} from '../../utils/scripts/Utils'

// types
import { ReactElement } from 'react'
import { ITOHistoCalls } from '../../API/interfaces/TO.interface.ts'

// components
import Loader from '../loader/Loader'
import Button from '../button/Button'

// hooks
import { useContext, useEffect } from 'react'

// context
import { LoaderContext } from '../../context/LoaderContext/LoaderContext'
import { TOContext } from '../../context/TOContext/TOContext'
import { FileContext } from '../../context/fileContext/FileContext'

export default function HistoCalls({
  toggleHistoCalls,
}: {
  toggleHistoCalls: () => void
}): ReactElement {
  const { isLoading, startLoading, stopLoading } = useContext(LoaderContext)
  const { file, campaign } = useContext(FileContext)
  const { TO, TOHistoCalls, getTOHistoCalls } = useContext(TOContext)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    startLoading()
    if (!TOHistoCalls) {
      await getTOHistoCalls(
        {
          matricule: TO!.codetoaffecte,
          password: '9884',
        },
        {
          codeprospect: file!.code,
          campaign: formatCampaignNameForBackEnd(campaign!),
          // TODO : AJOUTER UN CODEAPPEL POUR NE PAS AFFICHER L'APPEL EN COURS
          // TODO : OU MAPPER LES CODEAPPEL ET SUPPRIMER L'APPEL EN COURS
        },
      )
    }
    stopLoading()
  }

  return (
    <>
      <section id={'histoCalls'}>
        <h2>Historique appels</h2>
        {isLoading ? (
          <Loader />
        ) : TOHistoCalls ? (
          <div className={'tableContainer'}>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Nature</th>
                  <th>Statut</th>
                  <th>Sous-statut</th>
                  <th>Prog-PA</th>
                  <th>Commentaire</th>
                </tr>
              </thead>
              <tbody>
                {TOHistoCalls?.map((call: ITOHistoCalls, index: number) => (
                  <tr key={index}>
                    <td>{formatDateForDisplay(call.dateappel)}</td>
                    <td>{call.typeappel}</td>
                    <td>{call.statutcon}</td>
                    <td>{call.sstatutcon}</td>
                    <td>{call.progpa}</td>
                    <td>{call.infoto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Aucun historique d'appels pour le moment.</p>
        )}
        <div className={'buttonWrapper'}>
          <Button
            props={{ textContent: 'Retour', onClick: toggleHistoCalls }}
          />
        </div>
      </section>
    </>
  )
}
