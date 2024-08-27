
/* //codigo optimizado con la funcion asignarTextoElemento()
let parrafo = document.querySelector('p');
parrafo.innerHTML ='Ingrese un número del 1 al 10';  */ 

let numeroSecreto;  
let intentos;
let listaNumerosAleatorios=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value); 

    if(numeroUsuario=== numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos==1?'intento':'intentos'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    }else{
        if(numeroUsuario < numeroSecreto){
            asignarTextoElemento('p','El número es mayor');
        } else {
            asignarTextoElemento('p','El número es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto(){ 
    let numAleatorio = Math.floor(Math.random()*10) + 1;

    console.log(numAleatorio); 
    console.log(listaNumerosAleatorios); 
    //si ya jugamos con todos los numeros aleatorios
    if(listaNumerosAleatorios.length == numeroMaximo){ 
        asignarTextoElemento('p',`Ya se jugaron con todos los numeros posibles aleatorios del 1 al ${numeroMaximo}`);
    }else{
        // si el nuemro aleatorio esta en la lista 
        if(listaNumerosAleatorios.includes(numAleatorio)){ 
            return generarNumeroSecreto();
        }else{
            listaNumerosAleatorios.push(numAleatorio);
            return  numAleatorio;
        }
    }

}

function limpiarCaja(){ 
    document.getElementById('numeroUsuario').value = ''; 
}

function reiniciarJuego(){ 
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Ingrese un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}

condicionesIniciales();