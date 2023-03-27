import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1'; //root

function fetchData(urlAPI){
    return fetch(urlAPI);
};

/*fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products =>{
        console.log(products);
    })
    .then(()=> console.log('hola'))
    .catch((err)=> console.log(err));*/
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => fetchData(`${API}/products/${products[0].id}`))
    .then(response=> response.json())
    .then((products)=>fetchData(`${API}/products/${products.category.id}`))
    .then(response=> response.json())
    .then((category)=>category.name)
    .catch((err)=> console.log(err))
    .finally(()=> console.log('finished'));