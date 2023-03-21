//Optional Chaining

user = {};
console.log(user?.name?.first_name);

//BigInt
const hugeNumber = 123456789123456789123456n;
const bigNumer = BigInt(123456789123456789123456);

console.log(hugeNumber === bigNumer);//false

// Nullish 
const nullable = null;
const x = nullable ?? 5;

console.log(x);//5

//Promise.allSettled

const promesa1 = new Promise((resolve, reject) => resolve('ok'));
const promesa2 = new Promise((resolve, reject) => reject('ok no'));
const promesa3 = new Promise((resolve, reject) => resolve('ok'));

Promise.allSettled([promesa1, promesa2, promesa3])
    .then((results) => {
        results.forEach((result) => {
            if (result.status === 'fulfilled') {
                console.log(`Promesa resuelta con valor: ${result.value}`);
            } else {
                console.log(`Promesa rechazada con razón: ${result.reason}`);
            }
        });
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
    });

//globalThis

console.log(window);//navegador
console.log(global);//node
console.log(self);//websorker
console.log(globalThis);//yes

//MatchAll
const regex = /\bapple\b/gi
const arr = 'apple '+ 'apple '+ 'mac'

for (const mathc of arr.matchAll(regex)){
    console.log(mathc)
}


//dynamic import 

// index.js

/*
const button = document.querySelector('button');

button.addEventListener('click', async () => {
  const { hello } = await import('./module.js'); //se puede importar en cualquier momento de una funcion asincrona 
  const greeting = hello('world');
  console.log(greeting); // Output: Hello, world!
});
*/




