import type { Options } from 'tsup'

const env = process.env.NODE_ENV

const config: Options = {
  entry: ['src/index.ts'],
  dts: true,
  sourcemap: true,
  format: ['cjs', 'esm'],
  minify: true,
  splitting: true,
  clean: true, // clean up the dist folder
  bundle: true,
  skipNodeModulesBundle: true,
  entryPoints: ['src/index.ts'],
  watch: env === 'development',
  target: 'es2020',
  outDir: 'dist'
}

export default config
