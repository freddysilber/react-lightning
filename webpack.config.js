const path = require('path')

module.exports = {
    mode: "none",
    output: {
        path: path.resolve(__dirname, "force-app/main/default/staticresources/ReactComponent")
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}