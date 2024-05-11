import React from 'react'
import css from './styles.module.css'

type Props = {}

const RandomComponent = (props: Props) => {
  console.log(css, 'css')
  return (
    <div>RandomComponent</div>
  )
}

export default RandomComponent