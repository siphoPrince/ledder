import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from '../app/hero'
import Cards from '../app/components/cards'
import OverView from '../app/components/statsoverview'
import ApplicationForm from '../app/components/application-form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero/>
              <Cards/>
              <OverView/>
            </>            
          }/>
        <Route path='/Application-form' element={<ApplicationForm/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
