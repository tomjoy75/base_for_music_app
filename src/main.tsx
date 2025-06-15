import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles/baseline.css';
import '@mantine/core/styles/default-css-variables.css';
import '@mantine/core/styles/global.css';
import '@mantine/core/styles/Badge.css';

// const theme = createTheme({
//   fontFamily: 'Open Sans, sans-serif',
//   primaryColor: 'cyan',
// });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider withGlobalClasses defaultColorScheme="dark">
     <App />
    </MantineProvider>
  </StrictMode>,
)
