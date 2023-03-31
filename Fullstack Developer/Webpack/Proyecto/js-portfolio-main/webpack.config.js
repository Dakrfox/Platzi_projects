const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
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
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            infect: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}