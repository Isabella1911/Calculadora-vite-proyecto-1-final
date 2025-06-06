type Props = {
  value: string
  onClick: (val: string) => void
}

export default function Button({ value, onClick }: Props) {
  const typeClass =
    value === '=' ? 'equal'
      : value === 'C' ? 'clear'
      : ['+', '-', '*', '/'].includes(value) ? 'operator'
      : ['%', '+/-'].includes(value) ? 'extra'
      : 'default'

  return (
    <button
      className={`standalone-button ${typeClass}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  )
}
