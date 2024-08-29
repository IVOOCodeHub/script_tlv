import 'typeface-ubuntu'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// context
import { FileProvider } from './context/fileContext/FileContext'
import { DocumentProvider } from './context/documentContext/DocumentContext'
import { PartnerProvider } from './context/partnerContext/PartnerContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FileProvider>
    <DocumentProvider>
      <PartnerProvider>
        <App />
      </PartnerProvider>
    </DocumentProvider>
  </FileProvider>,
)
