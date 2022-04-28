import React from "react";
import { useState } from "react";

export default function Car (){

    const [numero, setNumero] = useState(0);
    
    function sumar(){
        console.log(setNumero(numero + 1))
    }
    function restar(){
        console.log(setNumero(numero - 1))
    }
    
    return (
        <div>
            <h1>Tu Numero es: </h1>
            <p>{numero}</p>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
        </div>
    )
}

