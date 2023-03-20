# Variables y operaciones
## 1️. Responde las siguientes preguntas en la sección de comentarios:

### ¿Qué es una variable y para qué sirve?
**una variable es una forma de asignar un espacio en memoria para a posterior agregar un valor con la posbilidad de cambiarlo**
### ¿Cuál es la diferencia entre declarar e inicializar una variable?
**Declarar una variable solo creas ese espacio en memoria (en javascript qued ahi) inicializar una variable da a entender al programa que tipo de variable es y con que valores posibles podra utilizar dando un primer valor por defecto**
### ¿Cuál es la diferencia entre sumar números y concatenar strings?
**operacion aritmentica y concatenacion**
### ¿Cuál operador me permite sumar o concatenar?
**+**
## 2️ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
**Nombre = string
Apellido = string
Nombre de usuario en Platzi = string
Edad = number
Correo electrónico = string
Mayor de edad = boolean
Dinero ahorrado =number(flotante)
Deudas =number (flotante)***

## 3️. Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

**/test/prueba_js.js**

## 4️. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

**/test/prueba_js.js**

# Funciones
## 1️. Responde las siguientes preguntas en la sección de comentarios:

### ¿Qué es una función?

***bloque de codigo*** 

### ¿Cuándo me sirve usar una función en mi código?

***para:
 * limpiar el codigo, ya que es hace una funcion que se puede repetir en varios procesos
 * realizar una funcion especifica, con el fin de poder utilizarse luego
 * estructurar mejor el proposito general del programa***



### ¿Cuál es la diferencia entre parámetros y argumentos de una función?

***parametro son las variables que se le piden, argumento el valor dentro de ellas ***

### 2️ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

***const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
Condicionales***

***/test/test_js.js***

## 1️. Responde las siguientes preguntas en la sección de comentarios:

###¿Qué es una condicional?
***un validador donde se le entrega una condicion, este evalua si es verdadero o falso y ejecuta una accion consecuente de esa desicion***
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
***if, else if, else | switch | operador ternario***
¿Puedo combinar funciones y condicionales?
si
2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

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
***/test/test_js.js***
3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏
***/test/test_js.js***
# Ciclos
## 1️ Responde las siguientes preguntas en la sección de comentarios:

### ¿Qué es un ciclo?
***comportamiento reiterativo***
### ¿Qué tipos de ciclos existen en JavaScript?
*** for | for of | while | do while | for in ***
### ¿Qué es un ciclo infinito y por qué es un problema?
### ¿Puedo mezclar ciclos y condicionales?
***si***
## 2️. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
### 3️ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

Pista: puedes usar la función prompt de JavaScript.
***/test_js.js***
# Listas
## 1️ Responde las siguientes preguntas en la sección de comentarios:

### ¿Qué es un array?
***un arrgle, es una estructura de datos dinamica ***
### ¿Qué es un objeto?
***una representacion abstracta, es parte de un array***
## ¿Cuándo es mejor usar objetos o arrays?
***objetos mas que todos se utiliza en programacion orientada a objetos y bases de datos, los arreglos para todo lo que necesite agrupar datos***
### ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
***si***
## 2️ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
***/test_js.js/***
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

¿Cómo te fue? 🏆