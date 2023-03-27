let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;// Hacer instancias en JS 
// this is the way before ECMASCript to use callbacks

let API = "https://rickandmortyapi.com/api/character/";
//se crea una funcion que permite traer la información, se le asigna un callback
function fetch_data(url_api, callback){
    
    let xhttp = new XMLHttpRequest();//construir petición - aporte de microsoft al lenguaje
    xhttp.open('GET', url_api, true); //here we make the URL API open
    xhttp.onreadystatechange = function(event){ //escuchar la conexión (onready...) se ejectua una acción y un evento que no siempre será usado
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                 callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

//callbacks API

fetch_data(API,function (error1, data1){
    if(error1) return console.error(error1)
    //segunda petición
    fetch_data(API + data1.results[0].id, function (error2, data2){
        if(error2) return console.error(error2)
        //tercera petición
        fetch_data(data2.origin.url, function (error3, data3){
            if(error3) return console.error(error3)
            //impresiones de consola
            console.log (data1.info.count)
            console.log (data2.name)
            console.log (data3.dimension)
        })
    })
})
// we can just do it like this but it was just an eazy example and this could cause a calbacks hell so: 




