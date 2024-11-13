import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: 'sass',
        api: 'modern-compiler'
      }
    }
  },
  server: {
    host: 'localhost',
    port: 5173,
    open: true,
  },
});
