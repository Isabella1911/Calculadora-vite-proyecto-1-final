export default function handleNumber (value, { display, setDisplay, isNewInput, setIsNewInput }) {
  if (display === 'ERROR') return

  const next = isNewInput ? value : (display === '0' ? value : display + value)

  if (next.length <= 9) {
    setDisplay(next)
    setIsNewInput(false)
  }
}
