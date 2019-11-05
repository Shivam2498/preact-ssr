const path = require("path");

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
              },
        ]
    }
};
