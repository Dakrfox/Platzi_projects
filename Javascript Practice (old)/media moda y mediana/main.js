/*
media aritmetica
mediana
moda
*/

let lista = [];
let listax= [];


function media (lista){
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return lista.reduce(reducer)/lista.length;
}

function orden(lista){
    lista.sort((a,b)=>a-b);
    return lista;
}

function mediana(lista){
    const Nlista = orden(lista);
    let result;
    if(Nlista.length % 2===0){
        result=Nlista.slice(Nlista.length /2-1, Nlista.length /2+1).reduce((a,b) => a+b)/2;
    }else{
        result=Nlista.slice((Nlista.length /2), Nlista.length /2+1)[0];
    }
    return result;
}
function moda(lista){
    let listaux = lista;
    return listaux.sort((a,b) =>listaux.filter(v => v===a).length - listaux.filter(v => v===b).length).pop();
}

// let x = media(lista)
// let y = mediana(lista)
// let z = moda(lista)
// console.log(`la media es: ${x}, la mediana es ${y} y la moda es ${z}`)


function addlist(){
    const NUM = parseInt(document.getElementById("arr-add").value);
        lista.push(NUM);
        
        document.getElementById("tview").value=lista;
        document.getElementById("media").value=media(lista);
        document.getElementById("mediana").value=mediana(lista);
        

        document.getElementById("arr-add").value="";
}
function moda1(){
    document.getElementById("moda").value=moda(lista);
    
}