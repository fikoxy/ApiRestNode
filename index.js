/* // var let const
var nombre;
nombre = 'Pedro';
//nombre = 10;
var auto_sdfff = 'aaa';
var numero = 0;
var estado = true;
var decimal = 0.5;
console.log(nombre); */

/* let nombre = "Pepito";
const apellido = "Torres";
apellido = "carrasco";
if (true) {
    let nombre = "Juanito";
}
console.log(nombre); */

/* const personas = [];
const persona = {
    nombre: "Claudio",
    apellido: "Montoya",
    edad: 28,
    nombreCompleto() {
        return `${this.nombre} ${ this.apellido}`;
    }
} */

//personas.push(persona);

//**************************************************** */

/* let dato = "    esta es un texto     ";
let dato2 = "este es el dato dos";
console.log(dato.length);
console.log(dato.toUpperCase());
console.log(dato.toLowerCase());
console.log(dato.concat(dato2));
console.log(dato.indexOf("es"))
console.log(dato.includes("es"))
console.log(dato.trimStart())
console.log(dato.trimEnd())
console.log(dato.replace("es", "son"))
console.log(dato.substring(2, 4))
var palabra = dato2.split(' ');
console.log(dato.repeat(3));
console.log(palabra); */


let numero1 = 45;
let numero2 = "45";

if (numero1 === numero2) {
    console.log("Son iguales ");
} else {
    console.log("No son iguales ");
}
let resultado = Math.sqrt(45);
let concat = 0;

concat++;
concat--;
++concat;
--concat;

let numeroLetra = "456";
let numeroReal = Number.parseInt(numeroLetra);
let numeroReal2 = Number.parseFloat(numeroLetra);

if (Number.isInteger(numeroLetra)) {
    console.log("Es un numero")
}

console.log(numeroReal.toString());

console.log(resultado);


//console.log(persona.nombreCompleto());

let nuevaVariable = 22;


function sumar(numero1, numero2) {
    console.log("otra persona");
    return numero1 + numero2;
}

function resta(numero1, numero2) {

    return numero1 - numero2;
}