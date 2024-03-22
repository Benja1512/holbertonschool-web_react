const path = require('path');

module.exports = {
    // APP ENTRY POINT
    entry: './src/index.js',
    mode: 'development', // Set mode to 'development'

    // OUTPUT DIRECTORY
    output: {
        filename: 'bundle.js', // Nombre del archivo bundle generado
        path: path.resolve(__dirname, './dist') 
    },

    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            }
        ]
    },

    // DEV SERVER ENTRY POINT
    devServer: {
        hot: true,
        compress: true,
        contentBase: path.resolve(__dirname, './dist'),
        historyApiFallback: true
    },
};
