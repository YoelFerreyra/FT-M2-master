import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  console.log(props)
  return <div>
    <input type="text" />

    <button onClick={()=> props.onSearch("App de clima")}>Agregar</button>
  </div>
};