const path = require('path')
const uglify = require('uglifyjs-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
// const glob = require('glob')
// const PurifyCSSPlugin = require('purifycss-webpack')

var website ={
    publicPath:"http://localhost:3000/"
}

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
        main2: './src/main2.js'
    },
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: '[name].js',
        publicPath:website.publicPath  //publicPath：主要作用就是处理静态文件路径的。
    },
    module: {
        rules: [
            // { test:/\.css$/,use: ['style-loader','css-loader'] },
            {
                test:/\.css$/,use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","postcss-loader"]
                })
            },
            { test: /\.(jpg|png|gif||bmp|jepg)$/,
              use: [{
                loader: 'url-loader',
                options: {
                    limit:500,  //是把小于500B的文件打成Base64的格式，写入JS
                    outputPath:'images/',  //打包后的图片放到images文件夹下
                }
              }]
            },
            {
                test: /\.(htm|html)$/i,use: 'html-withimg-loader' 
            },
            {
                test: /\.less$/,
                use: extractTextPlugin.extract({
                    use: ['css-loader','less-loader'],
                    fallback: "style-loader"
                })
               
            },
            {
                test: /\.scss$/, use: extractTextPlugin.extract({
                    use: ["css-loader","sass-loader"],
                    fallback: "style-loader"
                })
            },
            {
                text: /\.js$/,use:' babel-laoder',exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new uglify(),
        new htmlPlugin({
            minify: {
                 removeAttributeQuotes:true  //removeAttrubuteQuotes是却掉属性的双引号
            },
            hash: true,
            template: './src/index.html'
        }),
        new extractTextPlugin('css/index.css'), //这里的/css/index.css 是分离后的路径
        // new PurifyCSSPlugin({ 
        //   //这里配置了一个paths，主要是需找html模板，purifycss根据这个配置会遍历你的文件，查找哪些css被使用了。
        //   paths: glob.sync(path.join(__dirname, 'src/*.html')),
        //   })
    ],
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname,'../dist'),
        host: 'localhost',
        port: 3000,
        compress: true
    }
}