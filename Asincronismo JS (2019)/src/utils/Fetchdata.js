let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;// Hacer instancias en JS 
// this is the way before ECMASCript to use callbacks

let API = "https://rickandmortyapi.com/api/character/";
//se crea una funcion que permite traer la información, se le asigna un callback
const fetch_data = (url_api)=>{
    return new Promise ((resolve, reject)=> {


        ////////////////////////}

        const xhttp = new XMLHttpRequest();//construir petición - aporte de microsoft al lenguaje
        xhttp.open('GET', url_api, true); //here we make the URL API open
        xhttp.onreadystatechange = (()=>{ //escuchar la conexión (onready...) se ejectua una acción y un evento que no siempre será usado
            if(xhttp.readyState === 4){
                ////////////////////////////
                (xhttp.status === 200) 
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject ( new Error('Error', url_api))
            }
        });
        xhttp.send();

    })
}


//callbacks API

module.exports = fetch_data;