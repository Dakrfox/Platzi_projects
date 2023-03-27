let arr = [1,2,3, [1,2,3, [1,2,3]]];

console.log(arr.flat(2)); // 2 = deep value 

//flatmap

let arr2 = [1,2,3,4,5];

console.log(arr2.flatMap(value => [value, value*2]));

//trimStart erase space at the begining

let hello = '                            hello world'
console.log(hello);
console.log(hello.trimStart());

hello = 'hello world              '
console.log(hello);
console.log(hello.trimEnd());

//catch withouth especify 

try {
    
} catch //(error) {
 {error}

// se le agrego el metodo from entries que hace lo contrario a entries y convierte un arreglo
// en un objeto

let entries = [["name", "osacar"], ["age", 32]];

console.log(Object.fromEntries(entries));

//description

let mysymb =  `My Symbol`;
let symbol = Symbol(mysymb);

console.log(symbol.description);