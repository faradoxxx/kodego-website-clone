const path = require('path')

module.exports = {
    entry: ".app/assets/scripts/App.js",
    output: {
        filenme: "bundled.js",
        path: path,resolve(__dirname, "app")
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    
};