import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';

const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss']
});
const projectRootDir = path.resolve(__dirname);

export default {
  // ...
  plugins: [
    alias({
      entries: [
        {
          find: '@pages/*',
          replacement: path.resolve(projectRootDir, 'src/pages/*')
          // OR place `customResolver` here. See explanation below.
        }
      ],
      customResolver
    }),
    resolve()
  ]
};