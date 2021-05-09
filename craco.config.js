const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#d90926', '@link-color': '#ba021c' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
