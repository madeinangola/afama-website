
const path = require('path');

module.exports = {
    mode: 'development',
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'scripts'),
        filename: 'bundle.js'
    },
    module: {
         rules: [
             {
               exclude: /node_modules/,
               test: /\.js%/,
               use: {
                   loader: 'bale-loader',
                   options: {
                       presets: ['@babel/env']
                   }
               }  
             }
         ]
    },
    devtool: 'source-map'
}