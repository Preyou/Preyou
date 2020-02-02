const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: "./dist",
    open: true,
    hot: true,
    port: 3000
  },
  module:{ 
    rules:[
      {
        test:/\.css$/,
        use:['style-loader' , 'css-loader'] 
      },
      {
        test:/\.less$/,
        use:['style-loader' , 'css-loader','less-loader'] 
      },
      {
        test:/\.scss$/,
        use:['style-loader' , 'css-loader','sass-loader'] 
      },
    ]
  }
}; 