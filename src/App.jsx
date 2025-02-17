import { useState } from 'react'
import Slider from './components/Slider/slider'
import './App.css'
import Details from './components/Details/details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slider/>
      <Details/>
    </>
  )
}

export default App
