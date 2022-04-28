import React from "react";

export default function Header(prop){
    return(
        <div>
            <h1>Home Work React 1</h1>
            <p>Acá abajo van a aparecer los componentes:</p>
            <p>Welcome {prop.name} {prop.surname}</p>
        </div>
    )
}