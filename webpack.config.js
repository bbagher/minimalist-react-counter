const path = require('path');

module.exports = {
  module: {

    rules : [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
          }
    ]
  },
  devServer: {
    port: 1234,
    contentBase: path.join(__dirname, 'src')
  }
}