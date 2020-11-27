const path = require('path');

module.exports = {
  mount: {
    public: '/',
    src: '/dist',
    configs: '/dist/configs',
  },
  plugins: [
    '@snowpack/plugin-sass',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    // [
    //   'snowpack-plugin-content-hash',
    //   {
    //     exts: ['.js', '.jsx'], // Extensions of files to be affected by this plugin. Note: only .js or .jsx are valid extensions.
    //     silent: true, // Provide log output during build process. Default: true.
    //     hashLength: 8, // Specify the max length of the resulting hash string. Defaults to 0 for the full length.
    //     hashAlgorithm: 'sha256', // Specify the hash algorithm. Defaults to md5.
    //   },
    // ],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    polyfillNode: true,
  },
  devOptions: {
    port: 3000,
    src: 'src',
    bundle: false,
    fallback: 'index.html',
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    '@src': path.join(__dirname, 'src'),
    '@configs': path.join(__dirname, 'configs'),
    '@api': path.join(__dirname, 'src/api'),
    '@pages': path.join(__dirname, 'src/pages'),
    '@components': path.join(__dirname, 'src/components'),
    '@router': path.join(__dirname, 'src/router'),
    '@store': path.join(__dirname, 'src/store'),
    '@utils': path.join(__dirname, 'src/utils'),
    '@styles': path.join(__dirname, 'src/styles'),
  },
};
