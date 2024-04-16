const fs = require('fs/promises');
const path = require('path');

const resolve = (...paths) => path.resolve(__dirname, '..', '..', '..', ...paths);

module.exports = {
  name: 'HTMLPlugin',
  setup(build) {
    const outdir = build.initialOptions.outdir;

    build.onEnd(async (result) => {
      const html = await fs.readFile(resolve('src', 'index.html'), 'utf8');
      const patchedHtml = html.replace('</body>', '  <script src="index.js"></script>\n  </body>');
      if (outdir) {
        await fs.writeFile(path.resolve(outdir, 'index.html'), patchedHtml);
      } else {
        await fs.writeFile(resolve('build', 'index.html'), patchedHtml);
      }
    });
  },
};
