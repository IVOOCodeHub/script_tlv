import 'typeface-ubuntu'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// context
import { FileProvider } from './context/fileContext/FileContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FileProvider>
    <App />
  </FileProvider>,
)
