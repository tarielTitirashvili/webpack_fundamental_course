import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import TBuildParams from './types/types'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import path from 'path'

export default function buildPlugins(
  options: TBuildParams
): Configuration['plugins'] {
  const isProd = options.mode === 'production'

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      // path to our html file without that plugin will create new html file
      template: options.paths.html, // path.join(__dirname, "public/index.html"),
      favicon: path.join(options.paths.public, 'favicon.ico'),
    }),
    new ForkTsCheckerWebpackPlugin(),
  ]

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
      })
    )
    plugins.push(
      new CopyPlugin({
        patterns: [
          { from: path.join(options.paths.public, 'locales'), to: path.join(options.paths.output, 'locales') },
        ],
      })
    )
  }
  if (options.analyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }
  return plugins
}
