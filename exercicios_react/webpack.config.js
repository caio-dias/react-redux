const webpack = require('webpack');

module.exports = {
    entry: './exercicios/exe7/index.jsx',
    output: {
        path: __dirname + '/public/',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    //explicitando as extensoes que o webpack vai reconhecer sem precisar colocar a extensao
    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}