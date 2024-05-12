import TBuildParams from "./types/types"
import { ModuleOptions } from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export default function buildLoaders(
  options: TBuildParams
): ModuleOptions["rules"] {
  const isDev = options.mode === "development"

  const assetLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  }

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  }

  const scssLoader = {
    test: /\.css$/,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ],
    exclude: /node_modules/,
  }
  return [assetLoader, scssLoader, tsLoader]
}
