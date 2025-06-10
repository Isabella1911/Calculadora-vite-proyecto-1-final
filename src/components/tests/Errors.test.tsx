// src/components/tests/Errors.test.tsx
import { render, fireEvent } from '@testing-library/react'
import Calculator from '../Calculator'
import { describe, test, expect } from 'bun:test'

const escapeRegex = (label: string): string =>
  label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const getButton = (utils: ReturnType<typeof render>, label: string) =>
  utils.getByRole('button', { name: new RegExp(`^${escapeRegex(label)}$`) })

describe('Errores en la calculadora', () => {
  test('999999999 - 1 = 999999998', () => {
    const utils = render(<Calculator />)
    '999999999'.split('').forEach(n => fireEvent.click(getButton(utils, n)))
    fireEvent.click(getButton(utils, '-'))
    fireEvent.click(getButton(utils, '1'))
    fireEvent.click(getButton(utils, '='))
    expect((utils.getByTestId('display') as HTMLInputElement).value).toBe('999999998')
  })

  test('999999999 / 2 muestra resultado correcto', () => {
    const utils = render(<Calculator />)
    '999999999'.split('').forEach(n => fireEvent.click(getButton(utils, n)))
    fireEvent.click(getButton(utils, '/'))
    fireEvent.click(getButton(utils, '2'))
    fireEvent.click(getButton(utils, '='))
    const result = (utils.getByTestId('display') as HTMLInputElement).value
    expect(result).not.toBe('1')
    expect(result).not.toBe('0')
    expect(result).not.toBe('ERROR')
  })

  test('presionar punto después de operación inicia nuevo número decimal', () => {
    const utils = render(<Calculator />)
    fireEvent.click(getButton(utils, '5'))
    fireEvent.click(getButton(utils, '+'))
    fireEvent.click(getButton(utils, '.'))
    expect((utils.getByTestId('display') as HTMLInputElement).value).toBe('0.')
  })

  test('no permite dos puntos decimales en un mismo número', () => {
    const utils = render(<Calculator />)
    fireEvent.click(getButton(utils, '1'))
    fireEvent.click(getButton(utils, '.'))
    fireEvent.click(getButton(utils, '5'))
    fireEvent.click(getButton(utils, '.')) // debe ser ignorado
    expect((utils.getByTestId('display') as HTMLInputElement).value).toBe('1.5')
  })

  test('ingresar 9 dígitos y luego operar con 1 = funciona', () => {
    const utils = render(<Calculator />)
    '123456789'.split('').forEach(n => fireEvent.click(getButton(utils, n)))
    fireEvent.click(getButton(utils, '+'))
    fireEvent.click(getButton(utils, '1'))
    fireEvent.click(getButton(utils, '='))
    const result = (utils.getByTestId('display') as HTMLInputElement).value
    expect(result).not.toBe('0')
    expect(result).not.toBe('ERROR')
  })
})
