import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.tsx'
import { WorkoutsContextProvider } from './context/WorkoutContext'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <App/>
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
