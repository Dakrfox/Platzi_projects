function sum (num1 , num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(1,2,sum));

setTimeout(function (){
    console.log("hola JS");
}, 2000);

function grettin(name){
    console.log(`hola ${name}`);
}

setTimeout(grettin,2000, 'nicolas');