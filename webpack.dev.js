const {
    merge
} = require("webpack-merge");
const common = require("./webpack.common");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerPort: 4000
        })
    ],
    mode: "development"
})