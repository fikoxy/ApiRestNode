function sumar(numero = 45, numero2 = 45) {
  return numero + numero2;
}

console.log(sumar(52));

const imprimir = function(nombre) {
  return "Imprimiendo Datos!!";
}

const imprimir2 = () => {
  return "Imprimiendo Datos!!";
}

const imprimir3 = () => console.log("Imprimiendo Datos!!");

const imprimir3a = nombre => `Saludos ${nombre}`;

const imprimir4 = (nombre, edad) => `Saludos ${nombre} edad:${edad}`;

const imprimir5 = (nombre, edad) => {
  edad += 10;
  return `Saludos ${nombre} edad:${edad}`;
};

console.log(imprimir5("Claudio", 28));