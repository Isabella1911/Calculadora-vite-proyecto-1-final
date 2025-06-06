export default function operate (aStr, bStr, op) {
  const a = parseFloat(aStr)
  const b = parseFloat(bStr)
  let result = 0
  if (op === '+') result = a + b
  if (op === '-') result = a - b
  if (op === '*') result = a * b
  if (op === '/') {
    if (b === 0) return 'ERROR'
    result = a / b
  }
  if (op === '%') {
    if (b === 0) return 'ERROR'
    result = a % b
  }
  if (isNaN(a) || isNaN(b)) return 'ERROR'
  if (result < 0 || result > 999999999) return 'ERROR'
  const str = result.toString()
  return str.length > 9 ? str.slice(0, 9) : str // limite de 9 numeros (. , -)
}
