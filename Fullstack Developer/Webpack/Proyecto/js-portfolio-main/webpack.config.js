const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename: "assets/images/[hash][ext][query]"
    },
    resolve: {
        extensions: ['.js'],
        alias:{
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@templates': path.resolve(__dirname, 'src/templates/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),

        }
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
                    name: "[name].[contenthash].[ext]",
                    outputPath: "./assets/fonts/",
                    publicPath: "../assets/fonts/",
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
        new miniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images"
                }
            ]
        }),
        new Dotenv(),
    ],
    optimization: {
        minimize:true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }
}