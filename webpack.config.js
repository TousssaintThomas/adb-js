const path = require('path')

module.exports = {
    entry: './src/index.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'adb.js',
        globalObject: 'this',
        library: {
            name: "adb",
            type: 'umd'
        }
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            adm: 'lodash',
            root: '_'
        }
    }
}