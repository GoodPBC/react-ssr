const path = require('path');

module.exports = {
  //let webpack know we are bundling on the server not the Client
  target: 'node',

  //tell webpack our entry point
  entry: './src/index.js',

  //tell webpack where to output the bundle using the path module from node
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  //tell webpack to run babel on every file it processes
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            [
              'env',
              {
                targets: {
                  browsers: ['last 2 versions']
                }
              }
            ]
          ]
        }
      }
    ]
  }
};
