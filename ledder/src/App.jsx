import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from '../app/hero'
import Cards from '../app/components/cards'
import OverView from '../app/components/statsoverview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Cards/>
      <OverView/>
    </>
  )
}

export default App
