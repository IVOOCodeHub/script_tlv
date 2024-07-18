// styles
import './authForm.scss'

// types
import { ReactElement } from 'react'

// components
import Header from '../../components/header/Header'
import PhoneNumberForm from '../../components/form/PhoneNumberForm.tsx'

export default function AuthForm(): ReactElement {
  return (
    <>
      <Header />
      <main>
        <PhoneNumberForm />
      </main>
    </>
  )
}
