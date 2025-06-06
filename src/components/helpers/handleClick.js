import handleNumber from './handleNumber'
import handleOperator from './handleOperator'
import handleEqual from './handleEqual'
import handleClear from './handleClear'
import handleDecimal from './handleDecimal'

export default function handleClickFactory (state) {
  return value => {
    const { display, setDisplay } = state

    if (display === 'ERROR' && value !== 'C') return

    if (!isNaN(value)) return handleNumber(value, state)
    if (['+', '-', '*', '/', '%'].includes(value)) return handleOperator(value, state)
    if (value === '=') return handleEqual(state)
    if (value === 'C') return handleClear(state)
    if (value === '.') return handleDecimal(state)
    if (value === '+/-') {
      if (display.startsWith('-')) {
        setDisplay(display.slice(1))
      } else if (display.length < 9) {
        setDisplay('-' + display)
      }
    }
  }
}
