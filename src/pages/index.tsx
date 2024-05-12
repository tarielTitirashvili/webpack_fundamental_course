import React, { useState } from "react"
import css from "./styles.module.css"
import { Outlet } from "react-router"
import TarielDragon from "assets/tarie_dragon.png"
import Microscope from "assets/microscope.svg"

type Props = {}

function MainPage({}: Props) {
  const [counter, setCounter] = useState<number>(0)

  return (
    <div>
      <span className={css.assetsContainer}>
        <img className={css.imageStyles} src={TarielDragon} />
        <img className={css.imageStyles} src={Microscope} alt="micro" />
      </span>
      <h3>{counter}</h3>
      <div>
        <button className={css.button} onClick={() => setCounter(counter + 1)}>
          increase by one
        </button>
      </div>
      <h1 className={css.text}>RandomComponent</h1>
      <Outlet />
    </div>
  )
}

export default MainPage
