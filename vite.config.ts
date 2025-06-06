import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/components/tests/setup.ts',
    include: ['src/**/*.test.{js,ts,jsx,tsx}'],
  },
})
