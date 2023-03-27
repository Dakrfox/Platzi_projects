import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1'; //root

function postData(urlAPI, data) {
    const response = fetch(urlAPI, {
        method: 'POST',
        mode: 'CORS',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    return response;
};

const data = {
    "title": "gpt-4",
    "price": 20,
    "description": "nos quitara el empleo y tendremos que trabajar como lava platos :D",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(()=>console.log('finished'))