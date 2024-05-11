import React, { useState } from "react"
import css from "./app.module.css"

type Props = {}

const App = (props: Props) => {
  const [counter, setCounter] = useState<number>(0)
  
  return (
    <div>
      <h3>{counter}</h3>
      <div>
        <button className={css.button} onClick={() => setCounter(counter + 1)}>
          increase by one
        </button>
      </div>
    </div>
  )
}

export default App
