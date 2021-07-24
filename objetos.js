const producto = {
  nombre: "Monitor Gamer 20\"",
  precio: 300000,
  informacion: {
      peso: "1kg",
      medida: "50cm"
  },
  disponibilidad: ["Los Angeles", "Chillan", "Concepcion"]
}

const bodega = {
  nombreBodega: "Los Angeles",
  stockBodega: 450
}

const datosObjetos = {...producto, ...bodega };
//console.log(datosObjetos);

console.log(Object.keys(bodega));
console.log(Object.values(bodega));
console.log(Object.entries(bodega));




//Object.freeze(producto);
//Object.seal(producto)
//delete producto.precio;

/* console.log(producto.precio);
producto.nombre = "Computador";
producto.stock = 60;
console.log(producto.nombre);
console.log(producto.stock); */
//let nombre=producto.nombre;
//let precio=producto.precio;
//let medida=producto.informacion.medida;

//const { nombre, precio, informacion } = producto;


function imprimir({ nombre = "", precio = "" }) {
  console.log(`Nombre:${nombre} precio:$ ${precio}`);
}

let obj = {};

//imprimir(obj);


//console.log(peso);