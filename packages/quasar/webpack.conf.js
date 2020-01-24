/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      app: path.resolve(__dirname),
      src: path.resolve(__dirname, 'src/'),
      components: path.resolve(__dirname, 'src/components'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      pages: path.resolve(__dirname, 'src/pages'),
      assets: path.resolve(__dirname, 'src/assets'),
      boot: path.resolve(__dirname, 'src/boot'),
      store: path.resolve(__dirname, 'src/store'),
      css: path.resolve(__dirname, 'src/css'),
      utils: path.resolve(__dirname, 'src/utils'),
      statics: path.resolve(__dirname, 'src/statics'),
    },
  },
};
