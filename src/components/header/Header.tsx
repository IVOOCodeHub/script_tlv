// styles
import './header.scss'

// assets
import logo from '../../assets/branding/brandingLogo.png'

// types
import { ReactElement } from 'react'

// hooks
import { Link } from 'react-router-dom'

export default function Header(): ReactElement {
  return (
    <header id={'header'}>
      <Link to={'/auth'}>
        <figure title={'Accueil'}>
          <img src={logo} alt={'logo'} />
        </figure>
      </Link>
      <h1>Script de vente</h1>
    </header>
  )
}
