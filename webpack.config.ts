import path from "path"
import { Configuration } from "webpack"
import buildWebpackConfig from "./config/webpack"

type TMode = "production" | "development"

interface IEnvironmentVariables {
  mode: TMode
  port: number
  analyzer: boolean | undefined
}

// end comes from package json scripts in mode param case
export default (env: IEnvironmentVariables): Configuration => {
  return buildWebpackConfig({
    mode: env.mode,
    port: env.port,
    analyzer: env.analyzer,
    paths: {
      entry: path.join(__dirname, "src", "index.tsx"),
      html: path.join(__dirname, "public", "index.html"),
      output: path.join(__dirname, "build"),
      src: path.join(__dirname, "src"),
      assets: path.join(__dirname, "src", "assets"),
    },
  })
}
