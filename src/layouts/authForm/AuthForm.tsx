// styles
import './authForm.scss'

// types
import { ReactElement } from 'react'

// components
import Header from '../../components/header/Header'
import SelectFile from '../../components/form/SelectFile.tsx'
import Footer from '../../components/footer/Footer'

export default function AuthForm(): ReactElement {
  return (
    <>
      <Header />
      <main id={'authForm'}>
        <SelectFile />
      </main>
      <Footer />
    </>
  )
}
