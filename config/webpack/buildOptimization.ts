import { Configuration } from "webpack"
import CssMinimizerPlugin from "css-minimizer-webpack-plugin"

export default function buildOptimization(): Configuration["optimization"] {
  return {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  }
}
