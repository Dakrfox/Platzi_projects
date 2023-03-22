const fect_data = require('../utils/Fetchdata');
const API  = 'https://rickandmortyapi.com/api/character/';

fect_data(API)
    .then(data => {
        console.log(data.info.count);
        return fect_data(`${API}${data.results[0].id}`)
    })
    .then(character =>{
        console.log(character.name);
        return fect_data(character.origin.url)
    })
    .then(origin=>{
        console.log(origin.dimension);
    })
    .catch(err => console.error(err));