import React from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Router from './router/Router'
import { useLocation } from 'react-router-dom'

const App = () => {
  let location = useLocation()
  return (
    <div>
      <Toaster position="top-right" />
      {
        location.pathname == "/login" || location.pathname == "/signup" ? null : <Navbar />
      }

      <Router />
    </div>
  )
}

export default App