
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
             },
             {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
              }
         ]
    },
    devtool: 'source-map'
}