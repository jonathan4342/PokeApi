import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../../presentation/pages/Home/Home.tsx';  
import { PokemonProvider } from '../../presentation/context/PokemonContext.tsx';

describe('App', () => {
  it('renders correctly', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    createRoot(container).render(
      <StrictMode>
        <PokemonProvider>
          <App />
        </PokemonProvider>
      </StrictMode>
    );

    expect(container).toContainElement(document.querySelector('div'));
  });
});
