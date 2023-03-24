import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1'; //root

async function fetchData(urlAPI){
    const response = fetch(urlAPI);
    const data = (await response).json()
    return data;
}

const anotherFunction = async (urlAPI)=>{
    try {
        const products = await fetchData(`${urlAPI}/products`);
        const product = await fetchData(`${urlAPI}/products/${products[0].id}`);
        const category = await fetchData(`${urlAPI}/categories/${product.category.id}`);

        console.log(products)
        console.log(product.title);
        console.log(category.name);
    } catch{
        console.log('error')
    }
} 

anotherFunction(API);