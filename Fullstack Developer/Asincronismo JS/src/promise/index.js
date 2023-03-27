const promise = new Promise ((resolve, reject)=>{
    resolve('hey!');
});

const cows = 1;

const countCOws = new Promise((resolve, reject)=>{
    if ( cows > 10){
        resolve('si tenemos vacas!');
    }
    else{
        reject(' se acabaron las vacasas')
    }
});

countCOws.then((result)=>console.log(result))
.catch((err)=>console.log(err));

