//numeric separator

const x = 123456789;
const y = 123_456_789;

console.log(x === y);//true

//ReplaceAll
let str = "xa xe xi";
console.log(str.replace("x", "y")); //y x x 

console.log(str.replaceAll("x", "a")); //a a a 

console.log(str.replaceAll(/a/gi, "*"));//x* xe xi


//Promise.any


const promesa1 = new Promise((resolve, reject) => resolve('ok'));
const promesa2 = new Promise((resolve, reject) => reject('ok no'));
const promesa3 = new Promise((resolve, reject) => resolve('ok'));

console.log(Promise.any([promesa1, promesa2, promesa3]).then(result => {
    console.log(result);
})
    .catch(errors => {
        console.log(errors); // Output: AggregateError: All promises were rejected
    })
);

//#private 
class Persona {
    #nombre;

    constructor(nombre) {
        this.#nombre = nombre;
    }

    saludar() {
        console.log(`Hola, soy ${this.#nombre}`);
    }
}

const persona = new Persona("Juan");
persona.saludar(); // Output: Hola, soy Juan
//console.log(persona.#nombre); // Output: Uncaught SyntaxError: Private field '#nombre' must be declared in an enclosing class
