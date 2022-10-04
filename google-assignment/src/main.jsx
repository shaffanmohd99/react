import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import AuthProvider from './providers/AuthProvider'
import { Provider as ReduxProvider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
)
