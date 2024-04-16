const esbuild = require('esbuild');
const HTMLPlugin = require('./plugins/HTMLPlugin.js');
const path = require('path');
const copy = require('esbuild-plugin-copy').copy;

const resolve = (...paths) => path.resolve(__dirname, '..', '..', ...paths);

esbuild.build({
  entryPoints: [resolve('src', 'scripts', 'index.js')],
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: resolve('build'),
  plugins: [
    HTMLPlugin,
    copy({
      resolveFrom: resolve(),
      assets: {
        from: './src/assets/*',
        to: './build/assets',
      },
    }),
  ],
});
