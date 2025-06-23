import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // .JPG fayllar ruxsat etiladi

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
