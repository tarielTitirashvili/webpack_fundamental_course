interface TBuildPaths {
  entry: string
  html: string
  output: string
  src: string
  assets: string
}

type TMode = "production" | "development"

interface TBuildParams {
  port: number
  paths: TBuildPaths
  mode: TMode
  analyzer: boolean | undefined
}

export default TBuildParams