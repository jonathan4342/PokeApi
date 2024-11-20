import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './presentation/pages/Home/Home.tsx'
import './main.css'
import { PokemonProvider } from './presentation/context/PokemonContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </StrictMode>,
)
