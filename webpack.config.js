const path = require('path')

module.exports = {
    mode: "none",
    output: {
        path: path.resolve(__dirname, "force-app/main/default/staticresources/reactComponent")
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