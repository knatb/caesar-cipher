var mensaje = document.getElementById("mensaje");
var respuesta = document.getElementById("respuesta");
var numDesplazamientos = document.getElementById("numDes");
var btnCifrar = document.getElementById("cifrar");
var btnDescifrar = document.getElementById("descifrar");

window.onload = function(e){

    e.preventDefault();

    btnCifrar.addEventListener("click", function(){
       let texto = mensaje.value;
       let desplazamiento = numDesplazamientos.value;
       respuesta.value = cifrar(texto, desplazamiento);
    });

    btnDescifrar.addEventListener("click", function(){
        let texto = mensaje.value;
        let desplazamiento = numDesplazamientos.value;
        respuesta.value = descifrar(texto, desplazamiento);
     });
 
     function cifrar(texto, desplazamiento){
        let resultado = "";
        let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        // el valor se encuentra entre 0 y 25
        desplazamiento = (desplazamiento % 26 + 26) % 26;

        if(texto){
            for(let i = 0; i<texto.length; i++){
            if(abecedario.indexOf(texto[i]) != -1){
                //en qué posición del arreglo se encuentra la letra correspondiente
                let posicion = ((abecedario.indexOf(texto[i])+desplazamiento)%26);                
                    resultado += abecedario[posicion];
                } else {
                    resultado += texto[i];
                }
            }
        } return resultado;
     }

     function descifrar(texto, desplazamiento){
        let resultado = "";
        let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        desplazamiento = (desplazamiento % 26 - 26) % 26;

        if(texto){
            for(let i = 0; i<texto.length; i++){
                if(abecedario.indexOf(texto[i]) != -1){
                    let posicion = ((abecedario.indexOf(texto[i]) - desplazamiento)%26);
                    
                     resultado += abecedario[posicion];
                } else {
                    resultado += texto[i];
                }
            }
        } return resultado;
    }
};