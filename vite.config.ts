
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir:"build",
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TileLnglatTransform',
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        globals: {
        },
      },
    },
  },
})
