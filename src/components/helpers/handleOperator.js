import operate from './operate'
export default function handleOperator(op, state) {
  const {
    display, setDisplay,
    storedValue, setStoredValue,
    operator, setOperator,
    isNewInput, setIsNewInput
  } = state
  if (storedValue !== null && operator && !isNewInput) {
    const result = operate(storedValue, display, operator)
    if (result === 'ERROR') {
      setDisplay('ERROR')
      setStoredValue(null)
      setOperator(null)
      setIsNewInput(true)
      return }
    setDisplay(result)
    setStoredValue(result)
  } else {
    setStoredValue(display)}
  setOperator(op)
  setIsNewInput(true)}
