const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:{
            /*'@utils': path.resolve(__dirname, 'src/utils/'),
            '@templates': path.resolve(__dirname, 'src/templates/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
            */
        }
        //react es una extension y se establece aqui
    },
    module: {
        rules: [
            {
                test: /\.m?js|.jsx$/, //que  tipo de extensions trabajaremos .. regex
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },{
                test: /\.html$/ ,
                use: [HtmlWebpackplugin.loader,
                'html-loader'
            ], 
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