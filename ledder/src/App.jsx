import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from '../app/hero'
import Cards from '../app/components/cards'
import OverView from '../app/components/statsoverview'
import ApplicationForm from '../app/components/application-form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../app/login/login'
import DashBoard from '../app/pages/dashboard'
import Register from '../app/register/register'



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
              <div className="w-full px-4">
                <section className='mt-6'>
                  <Hero/>
                </section>
                <section className='mt-10'>
                  <Cards applications={applications}/>
                </section>
                <section className='mt-10'>
                  <OverView applications={applications} />
                </section>
              </div>
            </>            
          }/>
        <Route path='/Application-form'
          element={<ApplicationForm onSubmit={AddApplication} />}/>
          
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>

        <Route path='/dashboard'
          element={<DashBoard />}/>

      </Routes>
      
    </Router>
    </>
  )
}

export default App
