import babel from '@rollup/plugin-babel';
export default {
  input: 'app/app.js',
  output: {
    file: 'dist/treeleaf.automation.utils.min.js',
    format: 'iife',
    name: 'TreeleafAutomation',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
