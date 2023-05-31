import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslintPlugin from 'vite-plugin-eslint';
import * as path from 'path';
import resolve from '@rollup/plugin-node-resolve';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: [
      // { find: '@features', replacement: path.resolve(__dirname, 'src/features') },
      // { find: '@functions', replacement: path.resolve(__dirname, 'src/functions') },

      // { find: '@' + /^(.*)\.js$/, replacement: '$1.alias' },
      // { find: '@' + /^i18n\!(.*)/, replacement: '$1.js' }
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
