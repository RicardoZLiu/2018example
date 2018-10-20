const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/,use: ['style-loader','css-loader']},
            { test: /\.(jpg|png|gif||bmp|jepg)$/, use: 'url-loader?limit=5000' },
            { test: /\.(ttf|eot|svg||woff|woff2)$/, use: 'url-loader' },
            { test: /\.scss$/,use: ['style-loader','css-loader','sass-loader']},
            { test: /\.vue$/,use: 'vue-loader' }
        ]
    }
}