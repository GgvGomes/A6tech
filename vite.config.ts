import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: [
      { find: /^(.*)\.js$/, replacement: '$1.alias' },
      { find: /^i18n\!(.*)/, replacement: '$1.js' },

      // { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      // { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      // { find: '@components/*', replacement: resolve(__dirname, 'src/components/*') },

      // { find: '@styles/*', replacement: resolve(__dirname, 'src/styles/*') },
      // { find: '@pages/*', replacement: resolve(__dirname, 'src/pages/*') },
    ],
  },
});
