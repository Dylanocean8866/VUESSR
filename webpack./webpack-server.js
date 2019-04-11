const path = require("path");
const root = path.resolve(__dirname,'..');
const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode:"development",
    target:'node',
    entry:root +'/entry/server-entry.js',
    output:{
        libraryTarget:'commonjs2',
        path:root + "/dist",
        filename:'bundle-server.js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    },
    plugins:[new vueLoaderPlugin],
}