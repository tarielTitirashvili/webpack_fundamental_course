declare module '*.module.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module'*.png'
declare module'*.svg'
declare module'*.jpg'
declare module'*.jpeg'
declare module'*.gif'
