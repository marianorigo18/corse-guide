const bloque = document.querySelectorAll(".bloque");
const h2 = document.querySelectorAll(".h2");

//Cuando click en h2
    //QUITAR las clase activo en todos los bloques 
    //vamos a añadir la clase activo al BLOQUE con la posicion del h2

//recorrer todos los h2
h2.forEach( (cadaH2, i ) => {
    //asignando un click a cada h2
    h2[i].addEventListener("click", ()=>{

        //recorrer todos los bloques
        bloque.forEach( ( cadaBloque, i )=>{
            //quitamos la clase activo de todos los bloques
            bloque[i].classList.remove("activo");
        })
        //anadiendo la clase activa al bloque cuya posicion sea igual al del h2
        // linea 12 
        bloque[i].classList.add("activo");
    })
});