let cuadros$$ = document.querySelectorAll('[data-function="square"]')
let countdown$$ = document.querySelector('[data-function="time-left"]');
let intervalo$$ = setInterval(cuenta$$, 1000); 
let score$$ = document.querySelector('[data-function="score"]');
let result = 0;
let posicion$$ = 0;

function cuenta$$ (){
    let showTime$$ = countdown$$.textContent -1; 
    countdown$$.textContent = showTime$$; 

    if (showTime$$ == -1){
            alert('Tu puntuación es ' + result);
        location.reload()
    }
}


let cambioTopo$$ = setInterval(generarPosicion, 500);

function generarPosicion(){
    let candidato$$ = Math.floor(Math.random() * 9);
     
        if (candidato$$ !== posicion$$){
            posicion$$ = candidato$$
        } else if (candidato$$ === posicion$$ && candidato$$ !== 8){
            posicion$$ = candidato$$ + 1
        } else if (candidato$$ === posicion$$ && candidato$$ === 8){
            posicion$$ = candidato$$ -1
        }

    for (let index = 0; index < cuadros$$.length; index++) {
        
        if(posicion$$ == index){
            cuadros$$[index].classList.add("b-mole");
            cuadros$$[index].addEventListener('click', puntoArriba);
        } else {
            cuadros$$[index].classList.remove("b-mole");
        }
    }

    console.log(posicion$$)
}

function puntoArriba(){
    result += 1;
    score$$.textContent = result
}

