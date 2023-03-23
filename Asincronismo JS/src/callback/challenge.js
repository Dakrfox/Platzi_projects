const XMLHTTPRequest = require('xmlhttprequest').XMLHttpRequest;
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
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const err = new Error('Error ' + urlApI);
                return callback(err, null);
            }
        }
    }
    xhttp.send();
}

//se usaba hace tiempo con javascript

//llamado

fetchData(`${API}/products`, (err1, data1)=>{
    if(err1)return console.error(err1);
    fetchData(`${API}/products/${data1[0].id}`, function(err2,data2){
        if (err2) return console.error(err2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(err3, data3){
            if(err3) return console.error(err3);
            console.log(data1[0])
            console.log(data2.title);
            console.log(data3.name)
        });
    });
});
//$ node challenge.js
//