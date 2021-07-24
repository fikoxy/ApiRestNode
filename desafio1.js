let texto = "Node. js es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en . js haciendo alusión al lenguaje JavaScript). Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript."

function contarPalabras(txt){
  txt1=txt.replace('.','');
  txt1=txt1.replace('(','');
  txt1=txt1.replace(')','');
  //console.log(txt1); 
  palabras = txt1.split(' ');  
  arr = new Array();
  //cuenta palabras
  for(i=0 ; i<palabras.length; i++){          
       arr[palabras[i]] = 1;
       x=0;
       for(j=0; j<palabras.length; j++){         
         if(i != j){
          if(palabras[i] == palabras[j]){
            arr[palabras[i]]++;
            if (i>(j)){                    
                x=1;
            }                  
           }                 
         }                             
       }            
       if (x==0) {
          console.log(palabras[i] + ": " + arr[palabras[i]]);  
       }             
  }     
}

contarPalabras(texto);