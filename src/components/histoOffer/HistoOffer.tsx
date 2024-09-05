// styles
import './histoOffer.scss'

// types
import { ReactElement } from 'react'
import { IDocument } from '../../API/interfaces/Document.interface.ts'

// components
import Button from '../button/Button'
import Loader from '../loader/Loader'

// context
import { FileContext } from '../../context/fileContext/FileContext.tsx'
import { TOContext } from '../../context/TOContext/TOContext'
import { DocumentContext } from '../../context/documentContext/DocumentContext'

// hooks
import { useContext, useEffect } from 'react'
import { LoaderContext } from '../../context/LoaderContext/LoaderContext.tsx'

// utils
import { formatDateForDisplay } from '../../utils/scripts/Utils.ts'

export default function HistoOffer({
  toggleHistoOffer,
}: {
  toggleHistoOffer: () => void
}): ReactElement {
  const { isLoading, startLoading, stopLoading } = useContext(LoaderContext)
  const { file } = useContext(FileContext)
  const { TO } = useContext(TOContext)
  const { histoOffers, getHistoOffers } = useContext(DocumentContext)

  useEffect(() => {
    if (file && TO && !histoOffers) {
      getDatas()
    }
  }, [])

  const getDatas = async (): Promise<void> => {
    startLoading()

    const userCredentials = {
      matricule: TO!.codetoaffecte,
      password: '9884',
    }
    const args = {
      refsource: file!.refsource,
    }

    await getHistoOffers(userCredentials, args)
    stopLoading()
  }

  const reformatChannel = (channel: string, delivered: string): string => {
    switch (channel) {
      case 'F': {
        switch (delivered) {
          case '1':
            return 'e-mail reçu'
          case '0':
            return 'e-mail non reçu'
          default:
            return 'e-mail'
        }
      }
      case 'E': {
        switch (delivered) {
          case '1':
            return 'Courrier reçu'
          case '0':
            return 'Courrier non reçu'
          default:
            return 'Courrier'
        }
      }
      default:
        return ''
    }
  }

  const filterOfferStatement = (
    transcode: string,
    perdu: string,
    newdoc: string,
    montantremercier: string,
  ): string | undefined => {
    if (newdoc !== '0') return 'Remplacé'
    else if (perdu === '1') return 'Perdu'
    else if (montantremercier !== null) return 'Remercié'
    else if (transcode !== '0') return 'Confirmé'
  }

  return (
    <>
      <section id={'histoOffer'}>
        <h2>Historique offres</h2>
        {isLoading ? (
          <Loader />
        ) : histoOffers ? (
          <div className={'tableContainer'}>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Nature</th>
                  <th>Contact</th>
                  <th>Montant</th>
                  <th>Canal</th>
                  <th>Résultat</th>
                </tr>
              </thead>
              <tbody>
                {histoOffers?.map((offer: IDocument, index: number) => {
                  return (
                    <tr key={index}>
                      <td>{formatDateForDisplay(offer.datecreation)}</td>
                      <td>{offer.typedoc}</td>
                      <td>
                        {offer.civilitecon} {offer.nomcon}
                      </td>
                      <td>{parseFloat(offer.tnht).toFixed(2)}€</td>
                      <td>{reformatChannel(offer.canal, offer.recuclient)}</td>
                      <td>
                        {filterOfferStatement(
                          offer.transcde,
                          offer.perdu,
                          offer.newdoc,
                          offer.montantremercier,
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Aucun historique d'offres pour le moment.</p>
        )}
        <div className={'buttonWrapper'}>
          <Button
            props={{ textContent: 'Retour', onClick: toggleHistoOffer }}
          />
        </div>
      </section>
    </>
  )
}
