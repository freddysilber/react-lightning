const path = require('path')

module.exports = {
    mode: 'none',
    output: {
        path: path.resolve(__dirname, 'force-app/main/default/staticresources/reactComponent')
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                // test: /\.jsx?$/,
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