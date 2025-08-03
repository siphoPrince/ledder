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
  const [applications, setApplications] = useState([]);
  // adding form
  const AddApplication = (app) =>{
    setApplications((prev)=> [...prev, app]);
  };

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
              <OverView applications={applications} />
            </>            
          }/>
        <Route path='/Application-form'
          element={<ApplicationForm onSubmit={AddApplication} />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
