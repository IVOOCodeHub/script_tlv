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
import Objection from './layouts/objection/Objection'
import CallPlan from './layouts/callPlan/CallPlan'
import NotFound from './layouts/notFound/NotFound'

function App(): ReactElement {
  return (
    <Router basename={'/script-tlv-v14'}>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/auth'} />} />
        <Route path={'/auth'} element={<AuthForm />} />
        <Route path={'/landing'} element={<LandingPage />} />
        <Route path={'/objection'} element={<Objection />} />
        <Route path={'/callplan'} element={<CallPlan />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
