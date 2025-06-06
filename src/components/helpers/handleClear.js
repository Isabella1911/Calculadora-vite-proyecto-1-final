export default function handleClear ({ setDisplay, setStoredValue, setOperator, setIsNewInput }) {
  setDisplay('0')
  setStoredValue(null)
  setOperator(null)
  setIsNewInput(false)
}
