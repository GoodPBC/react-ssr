const path = require('path');

module.exports = {
  //tell webpack our entry point
  entry: './src/client/index.js',

  //tell webpack where to output the bundle using the path module helper from node
  output: {
    filename: 'bundle.js',

    path: path.resolve(__dirname, 'public')
  },

  //tell webpack to run babel on every file it processes so we can convert all es2017, 2016 and JSX into
  module: {
    rules: [
      {
        test: /\.js?$/, //regEx to find .js files in project
        loader: 'babel-loader', //run webpack babel loader to exececute our code
        exclude: /node_modules/, //tell webpack to not run babel over any of our node_modules
        options: {
          //options passed to babel loader
          presets: [
            'react', // turns jsx into JavaScript
            'stage-0', // handles async
            [
              'env',
              {
                targets: {
                  browsers: ['last 2 versions']
                }
              }
            ] //run all transforms for all popular browser last two versions
          ]
        }
      }
    ]
  }
};
