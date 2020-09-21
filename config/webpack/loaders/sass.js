module.exports = {
  test: /\.s[ac]ss$/i,
  use: [
    'vue-style-loader',
    'css-loader',
    'sass-loader'
    // {
    //   loader: 'sass-loader',
    //   options: {
    //     // implementation: require('node-sass'),
    //     // indentedSyntax: true,
    //     sassOptions: {
    //       indentedSyntax: true
    //     }
    //   }
    // }
  ]
}



// module.exports = {
//   test: /\.sass(\.scss)?$/,
//   use: [{
//     loader: 'sass-loader'
//   }]
// }
