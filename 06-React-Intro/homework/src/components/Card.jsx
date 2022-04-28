import React from 'react';

function Card(props) {
  
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h1>{props.name}</h1>
      <h2>Min {props.min}</h2>
      <h2>Max {props.max}</h2>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Clima" />
    
    </div>
  )
};

export default Card;