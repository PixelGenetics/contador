const resultado = document.querySelector("p");

let contador = 0;

function mostrar(valor){
    resultado.innerText = valor;
}

const sumar =  () => mostrar(++contador)

const restar = () => { 
    if (contador < 1 ) {
        reinicio();
    } else{
        mostrar(--contador) 
    }
}

const reinicio = () => mostrar(contador=0)
