import React, { useState } from "react";

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState("");

  console.log(city);
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("")
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}

        onChange={(e)=>setCity(e.target.value)}
      />
      <input className="btn btn-primary" type="submit" value="Agregar" />
    </form>
  );
}
