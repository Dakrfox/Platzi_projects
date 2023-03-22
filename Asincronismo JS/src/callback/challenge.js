const XMLHTTPRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1'; //root

function fetchData(urlApI, callback){
    let xhttp = new XMLHTTPRequest();

    xhttp.open('GET', urlApI, true)//abrir conexion
    xhttp.onreadystatechange = function (event){
        if (xhttp.readyState===4){
            //0 inicializado
            //1 loading
            //2 se ha cargado
            //3 procesamiento por si hay que descargar
            //4 completado
            if(xhttp.status ===200){
                callback(null, JSON.parse(xhttp.responseTest()))
            }
        }else{
            const err = new Error('Error ' + urlAPI);
            return callback(err, null);
        }
    }
    xhttp.send();
}

//se usaba hace tiempo con javascript

