const producto={
    nombre: "Monitor gamer 20\"",
    precio:300000,
    informacion:{
        peso:"1 kg",
        medida:"50 cm"
    },
    disponibilidad:["Los Angeles","Chillan","Concepcion"]
}

//let nombre=producto.nombre;
//let precio=producto.precio;
//let medida=producto.medida;

const {nombre,precio,informacion}=producto;

function imprimir({nombre,precio,informacion:{peso}}){
    console.log(`Nombre:${nombre} precio:$ ${precio} peso:${peso}`)
}

imprimir(producto);
//console.log(nombre);

