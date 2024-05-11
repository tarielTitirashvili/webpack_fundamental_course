// import { ModuleOptions } from "webpack"
// import MiniCssExtractPlugin from "mini-css-extract-plugin"
import TBuildParams from "./types/types"

// export default function buildLoaders(
//   options: TBuildParams
// ): ModuleOptions["rules"] {
//   const isDev = options.mode === "development"

//   const cssLoaderWithModules = {
//     loader: "css-loader",
//     options: {
//       modules: {
//         localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
//       },
//     },
//   }

//   const cssLoader = {
//     test: /\.css$/i,
//     use: [
//       isDev ? "style-loader" : MiniCssExtractPlugin.loader,
//       cssLoaderWithModules,
//     ],
//   }

//   const scssLoader = {
//     test: /\.s[ac]ss$/i,
//     use: [
//       // Creates `style` nodes from JS strings
//       isDev ? "style-loader" : MiniCssExtractPlugin.loader,
//       // Translates CSS into CommonJS
//       cssLoaderWithModules,
//       // Compiles Sass to CSS
//       "sass-loader",
//     ],
//   }

//   const tsLoader = {
//     test: /\.tsx?$/,
//     use: "ts-loader",
//     exclude: /node_modules/,
//   }

//   return [cssLoader, scssLoader, tsLoader]
// }

import { ModuleOptions } from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
// import ReactRefreshTypeScript from "react-refresh-typescript";
// import {BuildOptions} from "./types/types";
// import {buildBabelLoader} from "./babel/buildBabelLoader";

export default function buildLoaders(
  options: TBuildParams
): ModuleOptions["rules"] {
  const isDev = options.mode === "development"

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  }

  // const svgrLoader = {
  //     test: /\.svg$/i,
  //     use: [
  //         {
  //             loader: '@svgr/webpack',
  //             options: {
  //                 icon: true,
  //                 svgoConfig: {
  //                     plugins: [
  //                         {
  //                             name: 'convertColors',
  //                             params: {
  //                                 currentColor: true,
  //                             }
  //                         }
  //                     ]
  //                 }
  //             }
  //         }
  //     ],
  // }

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
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: true,
        },
      },
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  // const babelLoader = buildBabelLoader(options);

  return [
    assetLoader,
    scssLoader,
    tsLoader,
    // babelLoader,
    // svgrLoader
  ]
}
