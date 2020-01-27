const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const HtmlWebpackInjector = require('html-webpack-injector');

module.exports = {
    // entry: {
    //     main_head: './src/main.ts',
    //     polyfills_head: './src/polyfills.ts',
    //     style_head: './src/style.css'
    // },
    // output: {
    //     path: "./dist",
    //     filename: "[name].bundle.js"
    // },
    plugins: [
        // new HtmlWebpackPlugin({ template: './src/index.html' })
        // new HtmlWebpackPlugin({
        //     template: "./src/index.html",
        //     filename: "./dist/index.html",
        //     chunks: ["main_head", "script_head", "polyfills_head", "runtime_head", "style_head"]
        // }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        })
    ]
}