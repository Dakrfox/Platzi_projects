//at 

let arr = [1, 2, 3];
console.log(arr[arr.length - 1] === arr.at(-1));//true

// top level await 
/*
myModule.js
export async function getData() {
    const response = await fetch('<URL>');
    const data = await response.json();
    return data;
}

index.js
import { getData } from './myModule.js';

const data = await getData();
console.log(data);*/