const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = () => {
  return {
    entry: {
      home: ['./src/javascript/main.js']
    },

    output: {
      path: __dirname + '/dist',
      filename: '[name].js'
    },

    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },

    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: [
              [
                '@babel/env',
                {
                  targets: {
                    browsers: ['last 2 versions', 'ie >= 10']
                  },
                  modules: false,
                  loose: true
                }
              ]
            ]
          }
        },

        {
          test: /\.s?[ac]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { url: false, sourceMap: false } },
            {
              loader: 'sass-loader',
              options: {
                url: false,
                sourceMap: true
              }
            }
          ]
        },

        {
          test: /\.(woff|ttf|png|jpg|gif|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            name: '[name].[ext]',
            useRelativePath: true
          }
        },

        {
          test: /\.(jpg|png|gif|svg)$/,
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65
            },

            optipng: {
              enabled: false
            },
            pngquant: {
              quality: [0.65, 0.9],
              speed: 4
            },
            gifsicle: {
              interlaced: false
            },

            webp: {
              quality: 75
            }
          },
          enforce: 'pre'
        }
      ]
    },

    resolve: {
      extensions: ['.js', '.css', '.scss', '.json'],
      alias: {
        js: path.resolve(__dirname, 'src', 'js'),
        styles: path.resolve(__dirname, 'src', 'styles')
      }
    },
    plugins: [
      new CleanWebpackPlugin('dist', {}),

      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css'
      }),

      new htmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        inject: true,
        sourceMap: false,
        chunksSortMode: 'dependency',
        chunks: ['home']
      }),

      new CopyWebpackPlugin([
        {
          from: './src/assets',
          to: './assets'
        }
      ])
    ],
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 8000,
      inline: true,
      noInfo: true,
      stats: 'minimal'
    },
    devtool: 'source-map'
  }
}
