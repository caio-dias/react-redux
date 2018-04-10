//arquivo de configuracao do webpack, arquivo executado no node
const webpack = require('webpack');
//plugin para ler os arquivos css
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//configuracoes da aplicacao
module.exports = {
    //ponto de entrada
    //mudar pasta de exercicio cada vez que for testar um novo (melhorar isso)
    entry: './exercicios/exe5/index.js',
    //ponto de saida, public/bundle.js
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    //servidor do node, porta e onde ele vai buscar os arquivos
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    //exportando plugin de css e passando para onde sera gerado
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        //loader é tudo que sera carregado e modificado como dependencia de desenvolvimento
        loaders:[{
            //o loader vai carregar todo arquivo que termine em .js
            test: /.js?$/,
            //utilizando o babel loader
            loader: 'babel-loader',
            //excluindo pastar node modules da transpilacao
            exclude: /node_modules/,
            query: {
                //tipo de codigo que será traduzido para que o navegador possa ler
                presets: ['es2015', 'react'],
                //plugin para traduzir o operador spread
                plugins: ['transform-object-rest-spread']
            }
        }, {
            //testando arquivos css
            test: /\.css$/,
            //utilizando plugin para gerar arquivos css
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }]
    }
}