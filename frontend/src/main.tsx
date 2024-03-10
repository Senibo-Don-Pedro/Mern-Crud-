import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { workoutSlice } from './api/workoutSlice.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={workoutSlice}>
      <App/>
    </ApiProvider>
    
  </React.StrictMode>,
)
