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
import LandingPage from './layouts/landingPage/LandingPage'

function App(): ReactElement {
  return (
    <Router>
      <main>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/landing'} />} />
          <Route path={'/landing'} element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
