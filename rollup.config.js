// rollup.config.js
import json from 'rollup-plugin-json'
import typescript from '@rollup/plugin-typescript'
export default {
  input: 'src/index.ts',
  output: [
    {
      name: 'nforget',
      file: 'dist/index.js',
      format: 'umd'
    }
  ],
  plugins: [
    json(),
    typescript({lib: ["es5", "es6", "dom"], target: "es5"})
  ]
};
