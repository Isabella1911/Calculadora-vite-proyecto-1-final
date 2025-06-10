// src/components/tests/Calculator.test.tsx
import { render, fireEvent } from '@testing-library/react'
import Calculator from '../Calculator'
import { describe, test, expect } from 'bun:test'

const escapeRegex = (label: string): string =>
  label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const getButton = (utils: ReturnType<typeof render>, label: string) =>
  utils.getByRole('button', { name: new RegExp(`^${escapeRegex(label)}$`) })

describe('Calculadora básica', () => {
  test('realiza la operación 24 / 3 = 8', () => {
    const utils = render(<Calculator />)
    fireEvent.click(getButton(utils, '2'))
    fireEvent.click(getButton(utils, '4'))
    fireEvent.click(getButton(utils, '/'))
    fireEvent.click(getButton(utils, '3'))
    fireEvent.click(getButton(utils, '='))
    expect((utils.getByTestId('display') as HTMLInputElement).value).toBe('8')
  })

  test('realiza la operación 7 + 2 = 9', () => {
    const utils = render(<Calculator />)
    fireEvent.click(getButton(utils, '7'))
    fireEvent.click(getButton(utils, '+'))
    fireEvent.click(getButton(utils, '2'))
    fireEvent.click(getButton(utils, '='))
    expect((utils.getByTestId('display') as HTMLInputElement).value).toBe('9')
  })

  test('realiza 5 / 0 y muestra ERROR', () => {
    const utils = render(<Calculator />)
    fireEvent.click(getButton(utils, '5'))
    fireEvent.click(getButton(utils, '/'))
    fireEvent.click(getButton(utils, '0'))
    fireEvent.click(getButton(utils, '='))
    expect((utils.getByTestId('display') as HTMLInputElement).value).toBe('ERROR')
  })

  test('usa el botón C para limpiar el display', () => {
    const utils = render(<Calculator />)
    fireEvent.click(getButton(utils, '9'))
    fireEvent.click(getButton(utils, 'C'))
    expect((utils.getByTestId('display') as HTMLInputElement).value).toBe('0')
  })

  test('permite operar 99999999 - 1 y muestra 99999998', () => {
    const utils = render(<Calculator />)
    '99999999'.split('').forEach(n => fireEvent.click(getButton(utils, n)))
    fireEvent.click(getButton(utils, '-'))
    fireEvent.click(getButton(utils, '1'))
    fireEvent.click(getButton(utils, '='))
    expect((utils.getByTestId('display') as HTMLInputElement).value).toBe('99999998')
  })
})
