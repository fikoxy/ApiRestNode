const numeros = [1, 2, 3, 4, 5, 5, 6]



console.log(numeros[2]);

const nombres = ["juan", "pedro", "diego"];

console.log(nombres);

const cualqueircosa = [1, "Hola", 2.5, true, { numero: 1, nombre: "claudio" }];

console.log(cualqueircosa);

console.log(numeros.length);

for (let index = 0; index < numeros.length; index++) {
    console.log("[" + numeros[index] + "]");
}

numeros.push(200); //agregar elementos
console.log(numeros)
numeros.unshift(300);
//numeros.pop();
console.log(numeros)

for (const iterator of numeros) {
    console.log("xxxxx " + iterator);
}

numeros.forEach(function(el) {
    console.log("yyyyyy" + el);
})

console.log(numeros);

const numerosnuevos = numeros.map(function(el) {
    return el * 2;
})

const numerosMayores = numeros.filter(el => el > 200);

const sumaArreglo = numeros.reduce((total, el) => total + el, 0);

console.log(sumaArreglo);