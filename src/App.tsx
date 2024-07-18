// styles
import './utils/styles/global.scss'

// types
import { ReactElement } from 'react'

// hooks | libraries
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

// layouts
import AuthForm from './layouts/authForm/AuthForm'
import LandingPage from './layouts/landingPage/LandingPage'

function App(): ReactElement {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/landing'} />} />
        <Route path={'/auth'} element={<AuthForm />} />
        <Route path={'/landing'} element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
