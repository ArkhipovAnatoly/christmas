const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = {
    context: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src/index.ts'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: '[file]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets'),
                },
            ],
        }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
