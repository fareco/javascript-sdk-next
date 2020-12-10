import ts from '@wessberg/rollup-plugin-ts';

const output = (base) => [
  {
    dir: base + '/dist',
    format: 'cjs',
    entryFileNames: 'index.cjs.js',
  },
  {
    dir: base + '/dist',
    format: 'esm',
    entryFileNames: 'index.esm.js',
  },
];

export default [
  {
    input: 'core/src/index.ts',
    output: output('core'),
    plugins: [ts()],
    external: ['lodash', 'eventemitter3'],
  },
  {
    input: 'database/src/index.ts',
    output: output('database'),
    plugins: [ts()],
    external: ['lodash'],
  },
];