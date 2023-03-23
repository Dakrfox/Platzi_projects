const fnAsync = () =>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=> resolve('Async!!'),2000)//4
        : reject(new Error ('Error!')) ;
    })
}

const anotherFnAsync = async()=>{
    const something = await fnAsync();//3
    console.log(something);
    console.log('hello!');//5
}
console.log('before')//1
anotherFnAsync();
console.log('after');//2

