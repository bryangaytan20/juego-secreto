let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaximoIntentos = 5;


function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    if (intentos == numeroMaximoIntentos){

        asignarTextoElemento('p','Realizaste el número maximo de intentos, intenta con un nuevo juego.');
        document.getElementById('reiniciar').removeAttribute('disabled');
        limpiarCaja();

    }
    else{
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        
        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else {
            //El usuario no acertó.
            if(numeroDeUsuario < numeroSecreto){
                asignarTextoElemento('p','El número secreto es mayor');
            }
            else{
                asignarTextoElemento('p','El número secreto es menor');
            }
            intentos++;
            limpiarCaja();
        }
        return;
    }
    
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //verificamos si ya sorteamos todos los numeros.
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }
    else{
        //Si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }
        //Si no esta en la lista
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {

    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indica mensaje de intevalo de números
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el botón  de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();



