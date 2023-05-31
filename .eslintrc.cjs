module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  // 'plugin:vite-tsconfig-paths'
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'tsdoc'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },

  settings: {
    "import/resolver": "vite",
  }
  //   'import/resolver': {
  //     alias: {
  //       map: [
  //         ["@components", "src/components"],
  //         ["@components/*", "src/components/*"],
  //         ["@pages/*", "src/pages/*"],
  //         ["@styles/*", "src/styles/*"]
  //       ],
  //     },
  //   },
  // },
}
