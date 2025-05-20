import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import ShopProvider from './Context/ShopContex.jsx'

createRoot(document.getElementById('root')).render(
  
  <HashRouter>
      <ShopProvider>
            <App />
      </ShopProvider>
  </HashRouter>
  ,
)
