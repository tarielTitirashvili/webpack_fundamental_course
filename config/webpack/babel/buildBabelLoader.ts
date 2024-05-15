import TBuildParams from '../types/types'

function buildBabelLoader(options: TBuildParams) {
  const isDev = options.mode === 'development'
  return{
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          [
            '@babel/preset-react',
            {
              runtime: isDev ? 'automatic' : 'classic',
            },
          ],
        ],
      },
    },
  }
}

export default buildBabelLoader;
