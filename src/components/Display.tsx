import React from 'react'

export type DisplayProps = {
  value: string
}

export default function Display({ value }: DisplayProps) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      readOnly
      data-testid="display"
    />
  )
}
