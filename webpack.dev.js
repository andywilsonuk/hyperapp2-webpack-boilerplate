const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                'css-hot-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
            ],
        }],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './app.css',
        }),
    ],
    devServer: {
        open: 'Chrome',
        hot: true,
        publicPath: '/',
        contentBase: Path.join(__dirname, 'dist'),
        port: 8081,
    },
    devtool: 'eval-cheap-source-map',
});
