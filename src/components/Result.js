import React from 'react'
import { Link } from 'react-router-dom'

export default function Result(props) {
  return (
    <div className="result">
      <p>{props.result ? 'Вы выиграли' : 'Вы проиграли'}</p>
      <Link to="/game">Начать сначала</Link>
      <Link to="/">Главное меню</Link>
    </div>
  )
}