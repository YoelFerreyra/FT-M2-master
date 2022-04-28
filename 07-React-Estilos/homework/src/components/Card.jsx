import React from 'react';
import s from './Card.module.css'

export default function Card(props) {
  // acá va tu código
  return (
  <div className={s.card}>
    <button onClick={props.onClose}>X</button>
      <h1>{props.name}</h1>
      <h2>Min {props.min}</h2>
      <h2>Max {props.max}</h2>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Clima" />
  </div>
  )
};