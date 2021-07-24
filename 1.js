let texto = "Escribe un texto";

function cuentaLetras(txt){
    txt=txt.toLowerCase();
    var arr={};
    var n = texto.length;
    palabras = str.split(' ');
    for(i=0; i<palabras.length; i++){ // for(i=0; i < n; i++){
        var char=txt.charAt(i);
        if (char==" ") continue;
        if (arr[char]) arr[char]++
        else arr[char]=1;
    }
    return arr;
}

function ContarPalabras(texto,cad2){
    let contador1=0;
    let posicion1=0;
    while((posicion1=texto.indexOf(cad2,posicion1))!==-1 ){
++ contador1;
posicion1+=cad2.length;
    }
    return contador1;
}

function objetoACadena(arr){
    var cadena=[];
    for (var k in arr)
    {
        cadena.push(k+"="+arr[k]);
    }
    return cadena.join("\n");
}

var contador=cuentaLetras(texto);
console.log(contador);
//var contador=ContarPalabras(texto)
console.log(objetoACadena(contador));
//console.log(ContarPalabras(texto,'un'));
//console.log("2");
//console.log(objetoACadena(contador));
//alert(objetoACadena(contador));
