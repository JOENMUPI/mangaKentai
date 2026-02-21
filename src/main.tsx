import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app/App'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider forceColorScheme='dark'>
      <App />
    </MantineProvider>
  </StrictMode>,
)
