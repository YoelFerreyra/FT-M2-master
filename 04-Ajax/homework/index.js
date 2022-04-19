//VARIABLES LISTA DE AMIGOS
const verAmigos = document.getElementById("boton");
const lista = document.getElementById("lista");
//VARIABLES BOTON BUSCAR
const search = document.getElementById("search");
const input = document.getElementById("input").value;
const amigo = document.getElementById("amigo");
//VARIABLES BOTON ELIMINAR
const eliminar = document.getElementById("delete");
const inputDelete = document.getElementById("inputDelete");
const success = document.getElementById("success");

//Jquery
/*
verAmigos.addEventListener("click", ()=>{
    $.get(`http://localhost:5000/amigos`, (data)=>{
        
        let array = []

        data.map((element)=>{
            array.push(element.name)
        });

        array.map((element)=>{
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(element));
            lista.appendChild(li);
        });

    });   
});

search.addEventListener("click", ()=>{
    let id = $("#input").val();
    $.get(`http://localhost:5000/amigos/${id}`, (data)=>{
        let span = document.createElement("span");
        span.innerText = data.name;
        amigo.appendChild(span);
        console.log(data);
    });

});

eliminar.addEventListener("click", ()=>{
    let id = $("#inputDelete").val();

    $.get(`http://localhost:5000/amigos/${id}`, (data)=>{
        
        let valor = data.id;
        valor--;
        $("li:eq(" + valor + ")").remove();
        let span = document.createElement("span");
        span.innerText = "Tu amigo fue borrado con exito";
        success.appendChild(span);
    });
    
});
*/
verAmigos.addEventListener("click", ()=>{
    axios(`https://pokeapi.co/api/v2/pokemon`)
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.log(error)
    })
});