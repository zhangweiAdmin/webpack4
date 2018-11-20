const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpack = require('webpack'); 
const path = require('path');
module.exports = {
  mode:"development",
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    },
    extensions: ['.js', '.vue']
  },

  resolveLoader: {

  },
  module:{
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'image/png',
                    name: 'img/[hash].[ext]'
                }
            }
        ]
    },
    {
      test: /\.styl(us)?$/,
      use: [ 
        process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
        'css-loader',
        'stylus-loader' ]
    },
    {
      test: /\.vue$/,
      use: ['vue-loader'] 
    },
    {
      test: /\.pug$/,
      loader: 'pug-plain-loader'
    },
    {
      test: /\.js$/, exclude: /node_modules/,
      loader: "babel-loader"
    }
  ]},
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    open:true,
    hot:true,
    historyApiFallback: true,
    // before:function(app){
    //   app.get('/',function(req,res,next){
    //     next();
    //   })
    // },
    // headers:{
    //   host:'zhangwei.test.com'
    // },
    // proxy: {
    //   '/api': {
    //     target: 'http://www.baidu.com',
    //     changeOrigin:true
    //   }
    // }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'zhangwei-test',
      filename:'index.html',
      template:__dirname+"/src/layer.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].contenthash.css'
    })
  ]
};
