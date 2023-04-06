const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.m?js|.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },{
                test: /\.html$/ ,
                use: {
                    loader: 'html-loader'
                }, 
            },
        ]
    },
    plugins: [
        new HtmlWebpackplugin({
            infect: true,
            template: './public/index.html',
            filename: './index.html'
        }),
    ],
    
}