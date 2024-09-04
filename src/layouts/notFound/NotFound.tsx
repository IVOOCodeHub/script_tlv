// styles
import './notFound.scss'

// assets
import brandLogo from '../../assets/branding/brandingLogo.png'

// types
import { ReactElement } from 'react'

// hooks | libraries
import { Link } from 'react-router-dom'

export default function NotFound(): ReactElement {
  return (
    <main id={'notFound'}>
      <figure>
        <img src={brandLogo} alt={'ivoo logo'} />
      </figure>
      <p>Oups =(</p>
      <h1>Erreur 404</h1>
      <p>Il n'y a aucune page du site à cette adresse.</p>
      <p>
        Si vous pensez qu'il s'agit d'une erreur, merci de remonter le souci
        avec le support.
      </p>
      <p>
        N'oubliez pas de décrire les étapes pour reproduire le problème, afin
        que nous puissions le corriger au plus vite.
      </p>
      <Link to={'/'}>Retour à l'accueil</Link>
    </main>
  )
}
