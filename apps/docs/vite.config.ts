import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@jood/r-colorw',
        replacement: path.resolve(__dirname, '../../packages/r-colrow/src'),
      },
    ],
  },
});
