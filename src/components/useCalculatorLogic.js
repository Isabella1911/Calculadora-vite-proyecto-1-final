import { useState } from 'react'
import handleClickFactory from './helpers/handleClick'
export default function useCalculatorLogic () {
  const [display, setDisplay] = useState('0')
  const [storedValue, setStoredValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [isNewInput, setIsNewInput] = useState(false)
  const handleClick = handleClickFactory({
    display,
    setDisplay,
    storedValue,
    setStoredValue,
    operator,
    setOperator,
    isNewInput,
    setIsNewInput
  })
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '+/-', '+',
    '%', 'C', '='
  ]
  return { display, buttons, handleClick }
}
