import { Configuration } from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import TBuildParams from "./types/types"
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'


export default function buildPlugins(
  options: TBuildParams
): Configuration["plugins"] {
  const isProd = options.mode === "production"

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      // path to our html file without that plugin will create new html file
      template: options.paths.html, // path.join(__dirname, "public/index.html"),
    }),
    new ForkTsCheckerWebpackPlugin()
  ]

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "[id].[contenthash].css",
      })
    )
  }
  if (options.analyzer){
    plugins.push(new BundleAnalyzerPlugin())
  }
  return plugins
}
