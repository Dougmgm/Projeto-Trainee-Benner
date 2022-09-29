

                                //Exercício
// Crie uma função que receba um parâmetro que receba um valor entre 1 e 10 e efetue a tabuada

// a) A função deverá verificar se o parâmetro é um número

// b) A função deverá verificar se o parâmetro está entre 1 e 10

// c) O resultado sairá no console


window.onload = function(){

    function tabuada (numero){
        let tabuada = 0; 
            if (typeof numero !== 'number'){
                alert('digite um valor numérico válido');
            
            } else if (numero < 1 || numero > 10) {
                    alert('Digite um número entre 1 e 10')
                }
                else{ 
                    while (tabuada <= 10){
                    console.log(numero * tabuada);
                     tabuada++;
                 } 

                }
    }
    tabuada(5);
}


