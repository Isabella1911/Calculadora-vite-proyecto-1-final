import '@testing-library/jest-dom/vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import Calculator from '../Calculator'

const escapeRegex = (label: string): string =>
  label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const getButton = (label: string): HTMLElement =>
  screen.getByRole('button', { name: new RegExp(`^${escapeRegex(label)}$`) })

describe('Calculadora básica', () => {
  test('realiza la operación 24 / 3 = 8', () => {
    render(<Calculator />)
    fireEvent.click(getButton('2'))
    fireEvent.click(getButton('4'))
    fireEvent.click(getButton('/'))
    fireEvent.click(getButton('3'))
    fireEvent.click(getButton('='))
    expect(screen.getByTestId('display')).toHaveValue('8')
  })

  test('realiza la operación 7 + 2 = 9', () => {
    render(<Calculator />)
    fireEvent.click(getButton('7'))
    fireEvent.click(getButton('+'))
    fireEvent.click(getButton('2'))
    fireEvent.click(getButton('='))
    expect(screen.getByTestId('display')).toHaveValue('9')
  })

  test('realiza 5 / 0 y muestra ERROR', () => {
    render(<Calculator />)
    fireEvent.click(getButton('5'))
    fireEvent.click(getButton('/'))
    fireEvent.click(getButton('0'))
    fireEvent.click(getButton('='))
    expect(screen.getByTestId('display')).toHaveValue('ERROR')
  })

  test('usa el botón C para limpiar el display', () => {
    render(<Calculator />)
    fireEvent.click(getButton('9'))
    fireEvent.click(getButton('C'))
    expect(screen.getByTestId('display')).toHaveValue('0')
  })

  test('permite operar 99999999 - 1 y muestra 99999998', () => {
    render(<Calculator />)
    '99999999'.split('').forEach(n => fireEvent.click(getButton(n)))
    fireEvent.click(getButton('-'))
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('='))
    expect(screen.getByTestId('display')).toHaveValue('99999998')
  })
})
