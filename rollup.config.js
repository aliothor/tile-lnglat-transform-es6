import swc from '@rollup/plugin-swc'

const config = {
  input: './src/index.ts',
  output: [
    {
      file: 'build/index.mjs',
      format: 'es',
    },
    // {
    //   file: 'build/index.cjs',
    //   format: 'cjs',
    // },
    // {
    //   name: 'TileLnglatTransform',
    //   file: 'build/index.js',
    //   format: 'umd',
    // },
  ],
  plugins: [
    swc({
      swc: {
        jsc: {
          parser: {
            syntax: 'typescript',
            decorators: true,
            dynamicImport: true,
          },
          target: 'es2022',
        },
      },
      include: ['src/**/*'],
    }),
  ],
}

export default config
