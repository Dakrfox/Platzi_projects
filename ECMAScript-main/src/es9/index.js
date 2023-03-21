const obj= {
    name: 'oscar',
    age:32,
    country: 'MX',
}
//let {name, ...all} = obj;
let{country, ...all} = obj;
//console.log(name, all); 
console.log(all);

//propagation properties

const obj2 = {
    name: 'osacar',
    age: 32,
}

const obj3 ={
    ...obj2,
    country: 'MX',
}

console.log(obj3);



const helloworld = () => {
    return new Promise((resolve, reject)=>{
        (true)
            ? //resolve(' Hello world!')
            setTimeout(()=> resolve('hello world'),3000)
            : reject(new Error('Test error'))
    }
    )
}
helloworld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizado'));

//improvements

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);