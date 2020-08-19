/* eslint-disable */
// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js
const packageJson = require('./package');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
const webpackConf = require('./webpack.conf');
const Dotenv = require('dotenv-webpack');
const { configure } = require('quasar/wrappers');

export const frameworkLang = 'en-us';
const publicPath = '';

module.exports = configure(function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://quasar.dev/quasar-cli/cli-documentation/boot-files
    boot: [
      'vuePlugin/i18n',
      'vuePlugin/vuelidate',
      'vuePlugin/compositionApi',
    ],

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: [
      'app.styl',
    ],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v4',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!
      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],

    framework: {
      iconSet: 'material-icons',
      lang: frameworkLang,
      plugins: [],
      importStrategy: 'auto',
      autoImportComponentCase: 'combined',
    },

    // https://quasar.dev/quasar-cli/cli-documentation/supporting-ie
    supportIE: false,

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      distDir: 'dist',
      devtool: ctx.dev ? 'inline-source-map' : 'source-map',
      sourceMap: true,
      scopeHoisting: true,
      vueRouterMode: 'history', // available values: 'hash', 'history'
      showProgress: true,
      gzip: true,
      analyze: false,
      // Options below are automatically set depending on the env, set them if you want to override
      // preloadChunks: false,
      extractCSS: true,

      // https://quasar.dev/quasar-cli/cli-documentation/handling-webpack
      extendWebpack(cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|ts|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            formatter: require('eslint').CLIEngine.getFormatter('stylish'),
          },
        });

        if (ctx.prod) {
          cfg.optimization.mergeDuplicateChunks = true;
          cfg.optimization.splitChunks.chunks = 'all';
          cfg.optimization.splitChunks.maxInitialRequests = Infinity;
          cfg.optimization.splitChunks.minSize = 0;
          cfg.optimization.splitChunks.maxAsyncRequests = 10;
          cfg.optimization.splitChunks.cacheGroups = {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: (module) => `${module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1].replace(
                /[@\._]/gm,
                '')}`,
            },
            vue: {
              test: /[\\/]node_modules[\\/](@vue|vue-class-component|vue-property-decorator)[\\/]/,
              name: 'vue',
              reuseExistingChunk: true,
            },
            vuex: {
              test: /[\\/]node_modules[\\/](vuex|vuex-class)[\\/]/,
              name: 'vuex',
              reuseExistingChunk: true,
            },
            vueRouter: {
              test: /[\\/]node_modules[\\/]vue-router[\\/]/,
              name: 'vueRouter',
              reuseExistingChunk: true,
            },
          };

          cfg.plugins.push(new Dotenv({
            systemvars: true,
          }));

          cfg.plugins.push(new ManifestPlugin());
          /* Change the languages you want on your application */

          /* cfg.plugins.push(new webpack.ContextReplacementPlugin(/quasar-framework[\/\\]i18n/,
            /en|pt-br|us|uk/)); */
        }

        cfg.resolve.alias = {
          ...cfg.resolve.alias, // This adds the existing alias
          ...webpackConf.resolve.alias,
        };
      },
    },

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      https: false,
      port: 8080,
      open: true, // opens browser window automatically
    },

    // animations: 'all', // --- includes all animations
    // https://quasar.dev/options/animations
    animations: [],

    // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      pwa: false,
    },

    // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW
      manifest: {
        name: 'Quasar App',
        short_name: 'Quasar App',
        description: 'A Quasar Framework app',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },


    // Full list of options: https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
      id: packageJson.cordovaId,
    },


    // Full list of options: https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true,
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    electron: {
      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'quasar',
      },

      // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: true,
    },
    chainWebpack(chain, { isServer, isClient }) {
    },
    extendWebpack(cfg) {
      // do something with Electron main process Webpack cfg
      // chainWebpack also available besides this extendWebpack
    },

  };
});
