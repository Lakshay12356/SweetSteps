import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import compression from 'vite-plugin-compression';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false,
    }),
  ],
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor_react';
            }
            return 'vendor';
          }
        },
      },
    },
    sourcemap: false,
    minify: 'esbuild',
  },
  server: {
    host: true,
    port: 5173,
  },
});
