require('esbuild').buildSync({
  entryPoints: ['compiler.js'],
  bundle: true,
  platform: 'node',
  minify: true,
  outfile: 'index.js',
})