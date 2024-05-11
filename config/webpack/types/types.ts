interface TBuildPaths {
  entry: string
  html: string
  output: string
}

type TMode = "production" | "development"

interface TBuildParams {
  port: number
  paths: TBuildPaths
  mode: TMode
}

export default TBuildParams