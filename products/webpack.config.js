const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8000,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductIndex': './src/bootstrap'
            },
            shared: {
                faker: {
                    singleton: true,
                }
            },
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        })
    ],
};