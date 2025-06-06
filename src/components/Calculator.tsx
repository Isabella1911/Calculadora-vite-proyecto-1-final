import Display from './Display'
import Button from './Button'
import useCalculatorLogic from './useCalculatorLogic'
import './calculator.css'

export default function Calculator() {
  const { display, buttons, handleClick } = useCalculatorLogic()
  return (
    <div className='calculator'>
      <Display value={display} />
      <div className='buttons'>
        {buttons.map((btn, i) => (
          <Button key={i} value={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  )
}
