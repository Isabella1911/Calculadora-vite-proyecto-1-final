import { beforeAll, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

// Limpia después de cada test
afterEach(() => {
  cleanup()
})

// Configuración inicial si es necesaria
beforeAll(() => {
  // Configuraciones globales aquí si las necesitas
})