import {defineConfig} from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: '5000',
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      manualChunks: {
        'react-feather': ['react-feather'],
        'data-grid': ['@mui/x-data-grid'],
      },
    },
  },
  resolve: {
    alias: {
      constants: path.resolve(__dirname, './src/constants'),
      app: path.resolve(__dirname, './src/app'),
      components: path.resolve(__dirname, './src/app/components'),
      views: path.resolve(__dirname, './src/app/views'),
      middlewares: path.resolve(__dirname, './src/middlewares'),
      hooks: path.resolve(__dirname, './src/hooks'),
      utilities: path.resolve(__dirname, './src/utilities'),
    },
  },
});
