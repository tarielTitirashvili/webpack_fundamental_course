import React from "react"
import css from "./errorPage.module.css"
import { Link } from "react-router-dom"

type Props = {}

const ErrorPage = (props: Props) => {
  return <div>
    <div className={css.errorMessage}>
      ErrorPage
    </div>
    <Link to={'/'} >
      back to main page
    </Link>
  </div>
}

export default ErrorPage
