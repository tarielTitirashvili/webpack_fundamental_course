import webpack from "webpack"
import buildDevServer from "./buildDevServer"
import buildLoaders from "./buildLoaders"
import buildPlugins from "./buildPlugins"
import buildOptimization from "./buildOptimization"
import buildResolvers from "./buildResolvers"
import TBuildParams from "./types/types"

// end comes from package json scripts in mode param case
export default (options: TBuildParams): webpack.Configuration => {
  const { mode, paths } = options
  const isDev = mode === "development"

  return {
    mode: mode ?? "development",
    // entry point for project
    entry: paths.entry,
    devServer: isDev && buildDevServer(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? "inline-source-map" : false,
    optimization: buildOptimization(),
    plugins: buildPlugins(options),
    output: {
      path: paths.output,
      //contenthash is good to prevent cashing bugs because of browsers it changes builded file name every time it's content will change
      filename: "js/[name].[contenthash].js",
      clean: true,
    },
  }
}
