import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: './vitest.setup.ts',
    globals: true,
    include: ['src//*.test.{js,ts,jsx,tsx}'],
    exclude: ['node_modules', 'dist']
  }
})