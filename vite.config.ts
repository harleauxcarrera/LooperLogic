/* import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    https: {
      key: null,
      cert: null,
    }
  }
}); */

import { defineConfig } from 'vite';
import fs from 'fs';
import react from '@vitejs/plugin-react';

// Check if running in Netlify (production)
const isNetlify = process.env.NETLIFY === 'true';

export default defineConfig({
  plugins: [react()],
  server: isNetlify
    ? {
        host: 'localhost',
        port: 5173, // No HTTPS in Netlify
      }
    : {
        https: {
          key: fs.readFileSync('localhost-key.pem'),
          cert: fs.readFileSync('localhost.pem'),
        },
        host: 'localhost',
        port: 5173,
      },
  build: {
    outDir: 'dist',
  },
});