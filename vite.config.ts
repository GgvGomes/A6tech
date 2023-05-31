import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      // { find: '@features', replacement: path.resolve(__dirname, 'src/features') },
      // { find: '@functions', replacement: path.resolve(__dirname, 'src/functions') },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@components/*', replacement: resolve(__dirname, 'src/components/*') },
      
      { find: '@styles/*', replacement: resolve(__dirname, 'src/styles/*') },
      { find: '@pages/*', replacement: resolve(__dirname, 'src/pages/*') },
    ],
  },
})
