import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  esm: true,
  base: "/YuriBrasiliano",
  plugins: [react()],
})
