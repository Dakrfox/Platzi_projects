const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        assetModuleFilename: "assets/images/[hash][ext][query]"
    },
    resolve: {
        extensions: ['.js']
        //react es una extension y se establece aqui
    },
    module: {

        rules: [
            {
                test: /\.m?js$/, //que  tipo de extensions trabajaremos .. regex
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },{
                test: /\.css|.styl$/i ,
                use: [miniCssExtractPlugin.loader,
                'css-loader',
                'stylus-loader'
            ], 
            },
            {
                test: /\.png/, 
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: "application/font-woff",
                    name: "[name].[ext]",
                    outputPath: "./assets/fonts/",
                    publicPath: "./assets/fonts/",
                    esModule: false,
                },
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            infect: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new miniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images"
                }
            ]
        }),
    ]
}