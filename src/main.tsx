import 'typeface-ubuntu'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// context
import { LoaderProvider } from './context/LoaderContext/LoaderContext'
import { TOProvider } from './context/TOContext/TOContext'
import { FileProvider } from './context/fileContext/FileContext'
import { DocumentProvider } from './context/documentContext/DocumentContext'
import { PartnerProvider } from './context/partnerContext/PartnerContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <LoaderProvider>
    <TOProvider>
      <FileProvider>
        <DocumentProvider>
          <PartnerProvider>
            <App />
          </PartnerProvider>
        </DocumentProvider>
      </FileProvider>
    </TOProvider>
  </LoaderProvider>,
)
