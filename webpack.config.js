let path = require('path')
module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'dist.js',
  },
  externals: {
    lodash: {
      root: '_',
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
    },
  },
}
