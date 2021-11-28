const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    devServer: {
        port: 3000,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8000/remoteEntry.js',
                cart: 'cart@http://localhost:8001/remoteEntry.js',
            },
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        })
    ],
};