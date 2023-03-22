const something_async = () =>{
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve('succesful'), 3000)
            : reject(new Error('failure'))
    });
}

const something = async () => {
    const something = await something_async();
    console.log(something);
}

console.log('Before');
something();
console.log('After');

const another_function = async () => {
    try {
        const somethingtoDo= await something_async();
        console.log(somethingtoDo);
    } catch (error) {
        console.error(error)
    }
}

console.log('Before');
another_function();
console.log('After');