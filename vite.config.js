import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import dotenv from 'dotenv';

dotenv.config()
=======
import tailwindcss from '@tailwindcss/vite'
>>>>>>> 4c502574498bac528f760118143b8602b0a717f5

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})