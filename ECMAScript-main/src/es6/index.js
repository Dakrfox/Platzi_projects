function newFunction(nanme, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);

}

//es6
function newFunctioES6(name = 'oscar', age = 32, country ='MX'){
 console.log(name, age, country);
}
newFunctioES6('Ricado', 23, 'CO');

//concatenation
let hello = ' hello';
let world = ' world';
let phrase1 = hello + ' ' + world;
//es6
let pharse2 = `${hello} ${world}`

console.log(pharse1);
console.log(pharse2);

///////////////////////////////////////////////////////////
//multiline
let lorem ="lorem ipsum \n" + 
            "lorem ipsum";

//es6

let lorem2 = `otra frase epica 
              otra linea
              another line`;

console.log(lorem);
console.log(lorem2);

//destructuration

let person = {
    'name2': 'oscar',
    'age' : 32,
    'country': 'MX'
}

//js
console.log (person.name2, person.age, person.country);

//es6
let {name, age, country} = person;

console.log(name2, age, country);

//note: the object is already coded the difference is how is called

let team1 = ["osacar", "nicolaso", "ricarudo"];
let team2 = ["valeria", "yesica", "Camila"];

let team_todos=["Juan",...team1,...team2];

console.log(team_todos);

/////////////////////////////////////////////////

let name4 = ' osacar';
let age = 32;

obj =  {name: name4, age:age};

//es6

obj2 = {name4, age};
console.log(obj2);

//arrow function

const names  = [
    {named: "oscar", aged:32},
    {named: "uesica", aged:27}
];

let list_of_names = names.map(function(item){
    console.log(item.name);
});

//ES6 arrow function

let list_of_names2 = named.map(item => console.log(item.name));
//note: this code works on const or using = var(param) => {...}

//JS is not a sync language
//promise

const promise1 = () => {
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Hey!')
        }else{
            reject("ups!")
        }
    });
}
promise1()
.then(response =>console.log(response))
.then(() =>console.log('hello'))
.catch(error =>console.log(error))

//////////////////////////////////////////////////////////
//class
class kcal{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const cal = new kcal();
console.log(cal.sum(2,3));


/////module

let helloS = require('./module');
console.log(helloS);


//node exports and imports (documentation) 

//generator
function* helloworld(){
    if(true){
        yield 'hello, ';
    }    
    if (true){
        yield 'world';
    }
};

 const generatorHello = helloworld();
 console.log(generatorHello.next().value);
 console.log(generatorHello.next().value);
 console.log(generatorHello.next().value);

 //note * identify the generator... search fibonacci on generators


 