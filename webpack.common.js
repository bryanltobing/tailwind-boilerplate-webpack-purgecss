const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|webp)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:6].[ext]',
                    outputPath: 'images/',
                    publicPath: 'images/'
                }  
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            filename: 'index.html'
        }),
    ]
}