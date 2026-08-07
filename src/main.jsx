import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {MyThemeProvider} from './providers/ThemeProvider';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    {/* <MyThemeProvider> */}
    <App />
    {/* </MyThemeProvider> */}
  </StrictMode>
  ,
)
