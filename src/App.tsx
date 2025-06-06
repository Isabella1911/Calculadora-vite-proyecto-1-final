import { useState } from 'react'
import Calculator from './components/Calculator'
import InfoCard from './components/InfoCard'
import './App.css'

export default function App() {
  const [showCard, setShowCard] = useState<boolean>(false)

  return (
    <div className='main-frame'>
      <button className='title-button' onClick={() => setShowCard(!showCard)}>
        Calculadora
      </button>
      {showCard && <InfoCard />}
      <Calculator />
    </div>
  )
}
