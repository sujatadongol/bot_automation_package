import commonjs from '@rollup/plugin-commonjs';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import pkg from './package.json';

export default {
  input: 'app/app.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
      plugins: getBabelOutputPlugin({
        presets: ['@babel/preset-react'],
      }),
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    // This prevents needing an additional `external` prop in this config file by automaticall excluding peer dependencies
    // peerDepsExternal(),
    // sass({ insert: true }),
    // Convert CommonJS modules to ES6
    commonjs({
      include: 'node_modules/**',
      // This was required to fix some random errors while building
      // namedExports: {
      //   "react-is": ["isForwardRef", "isValidElementType"],
      // },
    }),
    // "...locates modules using the Node resolution algorithm"
    // resolve(),
    // Do Babel transpilation
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
  ],
};
