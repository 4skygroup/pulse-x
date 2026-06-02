import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({ algorithms: ['gzip'], exclude: [/\.(png|jpe?g|webp|gif|svg|woff2)$/] }),
    compression({ algorithms: ['brotliCompress'], exclude: [/\.(png|jpe?g|webp|gif|svg|woff2)$/] }),
  ],
})