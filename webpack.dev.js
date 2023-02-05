const { merge } = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
        port: 8080
    },
    optimization: {
        minimize: false
    }
})