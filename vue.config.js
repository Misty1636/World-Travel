// const webpack = require('webpack');

// module.exports = {
//     configureWebpack: {
//         plugins: [
//             new webpack.ProvidePlugin({
//                 $: 'jquery',
//                 jquery: 'jquery',
//                 'window.jQuery': 'jquery',
//                 jQuery: 'jquery'
//             })
//         ]
//     }
// }

const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
    }
}