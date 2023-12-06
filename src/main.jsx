import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseRef from './components/UseRef.jsx'
import ECommerce from './ECommerce.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <UseRef/> */}

    <ECommerce/>
    

  </React.StrictMode>,
)
