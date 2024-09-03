// styles
import './whoIsIt.scss'

// types
import { ReactElement } from 'react'
interface ISearchDocuments {
  campaign: string
  fileID: string
}

// hooks
import { useContext, useEffect } from 'react'

// context
import { FileContext } from '../../context/fileContext/FileContext'
import { DocumentContext } from '../../context/documentContext/DocumentContext'
import Button from '../button/Button.tsx'

export default function WhoIsIt({
  toggleWhoIsIt,
}: {
  toggleWhoIsIt: () => void
}): ReactElement {
  const { file } = useContext(FileContext)
  const { documents, getDocuments } = useContext(DocumentContext)

  useEffect((): void => {
    if (file!.code && !documents) {
      searchForDocument()
    }
  }, [])

  const searchForDocument = async (): Promise<void> => {
    const userCredentials: { matricule: string; password: string } = {
      matricule: '6176',
      password: '9884',
    }

    const findDocuments: ISearchDocuments = {
      campaign: 'apacvop',
      fileID: file!.code,
    }

    await getDocuments(userCredentials, findDocuments)
  }

  return (
    <section id={'whoIsIt'}>
      <h2>Qui est-ce ?</h2>
      {file && (
        <div className={'whoIsItContainer'}>
          <article>
            <div className={'leftContainer'}>
              <ul>
                <li>
                  <p>
                    Code : <span className={'data'}>{file.code}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Nom : <span className={'data'}>{file.nom}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Région : <span className={'data'}>{file.region}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Ville :{' '}
                    <span className={'data'}>
                      {file.cpres} {file.villeres}
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Rue : <span className={'data'}>{file.rue1res}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Complément d'adresse :{' '}
                    <span className={'data'}>{file.rue2res}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Responsable :{' '}
                    <span className={'data'}>
                      {file.civiliteres} {file.nomres}
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Activité : <span className={'data'}>{file.activite}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Taille : <span className={'data'}>{file.taille}</span>
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <div className={'RightContainer'}>
              <ul>
                <li>
                  <p>
                    Contact :{' '}
                    <span className={'data'}>
                      {file.civilitecon} {file.nomcon}
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    CA HT : <span className={'data'}>{file.CAtotal}€</span>
                  </p>
                </li>
                <li>
                  <p>
                    Nombre d'appels :{' '}
                    <span className={'data'}>{parseInt(file.nappels)}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Nombre d'offres :{' '}
                    <span className={'data'}>{file.NbreCDE}</span>
                  </p>
                </li>
              </ul>
            </div>
          </article>
        </div>
      )}
      <div className={'buttonWrapper'}>
        <Button props={{ textContent: 'Retour', onClick: toggleWhoIsIt }} />
      </div>
    </section>
  )
}
