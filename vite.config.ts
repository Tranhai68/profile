import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative assets work anywhere, including GitHub Pages https://tranhai68.github.io/profile/
  server: {
    port: 5173,
    open: true
  }
});
