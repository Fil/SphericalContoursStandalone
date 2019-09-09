import * as meta from './package.json'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'

const banner = `// ${meta.homepage} v${
  meta.version
} Copyright ${new Date().getFullYear()} ${meta.author.name}`
const onwarn = function(warning, warn) {
  if (warning.code === 'CIRCULAR_DEPENDENCY') {
    return
  }
  warn(warning)
}

const config = {
  input: 'src/main.js',
  onwarn: onwarn,
  output: {
    file: `public/main.js`,
    name: '${meta.name}',
    format: 'iife',
    indent: false,
    extend: true,
    banner: banner,
  },
  plugins: [resolve(), json(), babel()],
}

const minConfig = {
  input: config.input,
  onwarn: config.onwarn,
  output: {
    ...config.output,
    file: `public/main.min.js`,
    sourcemap: true,
  },
  plugins: [...config.plugins, terser()],
}

export default [config, minConfig]
