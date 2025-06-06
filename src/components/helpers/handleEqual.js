import operate from './operate'

export default function handleEqual (state) {
  const {
    display, storedValue, operator,
    setDisplay, setStoredValue,
    setOperator, setIsNewInput
  } = state
  if (!operator || storedValue == null) return
  const result = operate(storedValue, display, operator)
  if (result === 'ERROR') {
    setDisplay('ERROR')
  } else {
    setDisplay(result)
  }
  setStoredValue(null)
  setOperator(null)
  setIsNewInput(true)
}
