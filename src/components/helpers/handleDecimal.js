export default function handleDecimal({
  display,
  setDisplay,
  isNewInput,
  setIsNewInput
}) {
  if (display === 'ERROR') return
  if (display.length >= 9) return
  const next = isNewInput ? '0.' : display + '.'
  // no se pueden poner dos puntos en el mismo imput
  const lastSegment = display.split(/[+\-*/%]/).pop()
  if (lastSegment.includes('.')) return
  setDisplay(next)
  setIsNewInput(false)
}
