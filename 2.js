function contarPalabras(str){
        palabras = str.split(' ');
        obj = new Array();
        //cuenta palabras
        for(i=0 ; i<palabras.length; i++){
           
            //Ya encontro la primera, entonces sumo
             obj[palabras[i]] = 1;
             x=0;
             for(j=0; j<palabras.length; j++){
               //Evitamos que se cuente de nuevo
               if(i != j){
                if(palabras[i] == palabras[j]){
                  obj[palabras[i]]++;
                  if (i>(j)){                    
                      x=1;
                  }                  
                 }                 
               }                             
             }            
             if (x==0) {
                console.log(palabras[i] + ": " + obj[palabras[i]]);  
             }             
        }     
      }
     
    contarPalabras("hola me llamo pepe y pepe me dicen pepe");