const path = require('path');
const  HtmLWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',

    },
    resolve :{
        extensions: ['.js', '.jsx']
    },
    module: {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },{
                test:/\.html$/,
                use : [
                    {
                        loader: 'html-loader'
                    }
                ]
                
            },
            {
                test: /\.s[ac]ss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmLWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new CssMinimizerPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port:3006,
    }
}