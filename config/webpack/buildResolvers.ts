import { Configuration } from "webpack"
import TBuildParams from "./types/types"

export default function buildResolvers(
  options: TBuildParams
): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js", "png", "svg", "jpg", "jpeg", "gif"],
    alias: {
      "@": options.paths.src,
      assets: options.paths.assets,
    },
  }
}
