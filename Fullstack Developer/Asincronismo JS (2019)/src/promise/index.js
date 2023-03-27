//ECMASCRIPT 6
const something_will_happen = () =>
{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve("succesful!!!");
        }else{
            reject ("Failure :c");
        }

    });
};


something_will_happen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const something_will_happen2 = ()=>
    {
        return new Promise((resolve,reject)=>{
            if(true){
                setTimeout(()=>{
                    resolve('True');
                }, 2000);
            }else{
                //this is the diference between this one and the upper script 
                //now if it makes an error, it will be traced 
                const error = new Error('Failure');
                reject(error);
            }
        })
    }

something_will_happen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([something_will_happen(),something_will_happen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err)
    })