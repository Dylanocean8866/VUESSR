const path = require("path");
const root = path.resolve(__dirname,'..');
const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode:"development",
    entry:root +'/entry/client-entry.js',
    output:{
        path:root + "/dist",
        filename:'bundle-client.js'
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