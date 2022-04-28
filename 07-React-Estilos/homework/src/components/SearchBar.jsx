import React from 'react';
import sb from './SearchBar.module.css'

export default function SearchBar(props) {
  
  return (
    <div className={sb.searchBar}>
      <input type="text" />

      <button onClick={()=> props.onSearch("App de clima")}>Agregar</button>
    </div>)
};