import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: process.env.BASE_PATH || '/',
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT || 23961),
  },
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: true },
  },
});