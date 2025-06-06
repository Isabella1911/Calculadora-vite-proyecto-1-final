  // Tests para ver errores en la calculadora que me están pasando :(

import '@testing-library/jest-dom/vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import Calculator from '../Calculator'

const escapeRegex = (label: string): string =>
  label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const getButton = (label: string): HTMLElement =>
  screen.getByRole('button', { name: new RegExp(`^${escapeRegex(label)}$`) })

describe('Errores en la calculadora', () => {

  // no me deja hacer esto
  test('999999999 - 1 = 999999998', () => {
    render(<Calculator />)
    '999999999'.split('').forEach(n => fireEvent.click(getButton(n)))
    fireEvent.click(getButton('-'))
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('='))
    expect(screen.getByTestId('display')).toHaveValue('999999998')
  })

  // tampoco esto
  test('999999999 / 2 muestra resultado correcto', () => {
    render(<Calculator />)
    '999999999'.split('').forEach(n => fireEvent.click(getButton(n)))
    fireEvent.click(getButton('/'))
    fireEvent.click(getButton('2'))
    fireEvent.click(getButton('='))
    const display = screen.getByTestId('display')
    expect(display).not.toHaveValue('1')
    expect(display).not.toHaveValue('0')
    expect(display).not.toHaveValue('ERROR')
  })

  // mejorar diseño
  test('presionar punto después de operación inicia nuevo número decimal', () => {
    render(<Calculator />)
    fireEvent.click(getButton('5'))
    fireEvent.click(getButton('+'))
    fireEvent.click(getButton('.'))
    expect(screen.getByTestId('display')).toHaveValue('0.')
  })

  test('no permite dos puntos decimales en un mismo número', () => {
    render(<Calculator />)
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('.'))
    fireEvent.click(getButton('5'))
    fireEvent.click(getButton('.')) // este debe ser ignorado
    expect(screen.getByTestId('display')).toHaveValue('1.5')
  })

  test('ingresar 9 dígitos y luego operar con 1 = funciona', () => {
    render(<Calculator />)
    '123456789'.split('').forEach(n => fireEvent.click(getButton(n)))
    fireEvent.click(getButton('+'))
    fireEvent.click(getButton('1'))
    fireEvent.click(getButton('='))
    const result = (screen.getByTestId('display') as HTMLInputElement).value
    expect(result).not.toBe('0')
    expect(result).not.toBe('ERROR')
  })
})
