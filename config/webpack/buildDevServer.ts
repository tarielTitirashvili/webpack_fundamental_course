import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import TBuildParams from './types/types'

export default function buildDevServer(
  options: TBuildParams
): DevServerConfiguration {
  return {
    static: {
      directory: options.paths.html,
    },
    historyApiFallback: true,
    compress: true,
    port: options.port ?? 9000,
  }
}
