import 'typeface-ubuntu'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// context
import { FileProvider } from './context/fileContext/FileContext'
import { DocumentProvider } from './context/documentContext/DocumentContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FileProvider>
    <DocumentProvider>
      <App />
    </DocumentProvider>
  </FileProvider>,
)
