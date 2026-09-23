import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Visual Studio creates and locks files inside .vs.
      // Vite should not watch that folder.
      ignored: ['**/.vs/**', '**/node_modules/**', '**/dist/**']
    }
  }
})
