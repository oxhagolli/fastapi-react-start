const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin()],
        usedExports: true,
    },
    devtool: false,
    performance: {
        hints: false,
        maxEntryPointSize: 512000,
        maxAssetSize: 512000
    }
})