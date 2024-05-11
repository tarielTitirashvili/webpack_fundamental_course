import React, { useState } from "react"
import RandomComponent from "./ranomComponent"
import css from "./app.module.css"
const style = require("./app.module.css")

type Props = {}

const App = (props: Props) => {
  const [counter, setCounter] = useState<number>(0)
  console.log("button", css)
  return (
    <div>
      <h3>{counter}</h3>
      <div>
        <button className={css?.button} onClick={() => setCounter(counter + 1)}>
          increase by one
        </button>
      </div>
      <RandomComponent />
    </div>
  )
}

export default App
