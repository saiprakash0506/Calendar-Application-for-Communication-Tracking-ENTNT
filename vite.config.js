import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Update to match your subdirectory
  build: {
    outDir: 'build', // Specify output directory as 'build'
  },
});
