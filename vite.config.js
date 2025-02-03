import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from 'tailwindcss';


export default defineConfig({
  plugins: [react(), svgr()],
  base: '/My-Portfolio/',
  server: {
    port: 3000,
    strictPort: true,
    open: true
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  build: {
    sourcemap: true, // Helps debugging
    minify: 'terser', // Shows detailed errors on minification
    terserOptions: {
      compress: {
        drop_console: false // Keep console logs to debug
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss()
      ]
    }
  }
});
