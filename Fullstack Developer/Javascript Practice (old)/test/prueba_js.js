//prueba 2.2

function test(Nombre, apellido, nickname){
    const completeName = Nombre + " " +apellido;


    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

//prueba 1.3

let Nombre = "nicolas";
let apellido = "martinez";
let edad = 21;
let email = "zzrotzzas@gmail.com";
let nickname = "dakrfox";
let mayor_de_edad = (edad=>18) ? true : false ;
let ahorros = 202.1;
let deudas = -100.4;

test(Nombre, apellido, nickname)

//prueba 1.4

console.log(Nombre + " " + apellido);
console.log("tu dinero real es: " + (ahorros + deudas));

//transform 3.2
/*
switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
*/
tipoDeSuscripcion="Basic";
if(tipoDeSuscripcion=="Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion=="Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if (tipoDeSuscripcion=="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if (tipoDeSuscripcion=="ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
else{
    console.log("error, no ha introducido un plan existente");
}

//3.3
if(tipoDeSuscripcion=="Free"){
    console.log("Solo puedes tomar los cursos gratis");

}
if(tipoDeSuscripcion=="Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion=="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion=="ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
//Ciclos
/*for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}*/
//4.2
let i=0;
while (i<5){
    console.log("El valor de i es: " + i);
    i++;
}
i=10
while (i>=2){
    console.log("El valor de i es: " + i);
    i--;
}
//4.3
let resultado = prompt("introduce el resultado de 2+2");
while(resultado!="4"){
    resultado = prompt("introduce el resultado de 2+2");
}
console.log("felicitaciones");
//.4.2 y 4.3
arreglo1 = [1,2,3]

function impresion (arreglo){
    arreglo.forEach(function(elemento, indice, array) {
        console.log(indice, elemento);
    })
}
impresion(arreglo1)


let persona = {
    nombre: 'Oscar',
    apellido: 'Aguilar',
    edad: 21
  }
  const unaFuncion = (objeto) => {
    Object.values(objeto).forEach((elem) => {
      console.log(elem);
    });
  };
  
  unaFuncion(persona);
  