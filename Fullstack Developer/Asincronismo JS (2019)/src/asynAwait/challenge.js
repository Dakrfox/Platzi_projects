const fect_data = require('../utils/Fetchdata');
const API  = 'https://rickandmortyapi.com/api/character/';

/*fect_data(API)
    .then(data => {
        console.log(data.info.count);
        return fect_data(`${API}${data.results[15].id}`)
    })
    .then(data =>{
        console.log(data.name);
        return fect_data(data.origin.url)
    })
    .then(data=>{
        console.log(data.dimension)
    })
    .catch(err => console.error(err));
*/
const rickymorty = async (url_api) => {
    try {
        const data = await fect_data(url_api)
        const character = await fect_data(`${API}${data.results[0].id}`)
        const origin = await fect_data(character.origin.url)

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}


console.log('Before');
rickymorty(API);
console.log('After');