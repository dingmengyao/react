const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    //入口文件
    entry:{
        index:'./src/index.js',
        home:'./src/home.js'
    },
    //出口文件
    output:{
        path:path.resolve(process.cwd(),'dist'),
        filename:'[name].[chunkHash:6].js'     //添加哈希值，避免有缓存
    },
    plugins:[

        new htmlWebpackPlugin({
            title:'webpack',
            template:'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].[chunkHash:6].css',
            chunkFilename:'[id].css'
        })
    ],
    module:[
        {
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader,'css-loader']
        }
    ]
    
}