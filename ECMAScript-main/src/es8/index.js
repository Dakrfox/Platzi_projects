//object endpoint
const data = {
    frontend:'oscar',
    backend: 'ana',
    design: 'isa',
}
const entries = Object.entries(data);
console.log(entries);

//object to array

//////////////////////////////////////////////

//solo valores

const values = Object.values(data);
console.log(values);

//cuantos valores

console.log(values.length);

//padding

const string = "hello";
console.log(string.padStart(7,'w-'));
console.log(string.padEnd(7,'-w'));

///Async
// promesa con arrow function y Assert
const helloworld = () => {
    return new Promise((resolve,reject)=> {
        (true)
            ? setTimeout(()=>resolve('hello world!'),3000)
            :reject(new Error('Error'))
    });
}

const helloAsyn = async () =>{
    const hello = await helloworld();
    console.log(hello);
}

helloAsyn();

const anotherFunction = async ()=>{
    try {
        const hello = await helloworld();
        console.log(hello);
    } catch (error) {
        console.log(error);
        
    }
};
anotherFunction();