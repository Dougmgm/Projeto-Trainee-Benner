
// function teste(){ //função
//          alert('Estou na function teste') //o que a função vai fazer
// }

//         teste(); //chamando a função para executar ela

// console.log( teste() );
//     let msg = (nome)=>{ return 'Douglas Goes';
//     // alert('Estou feliz da vida com JS');    

// (function(){
//     alert('esta função me chamou sozinha') //função autoexecutavel, não é necessário fazer referencia 
// })()

// (function(produto, preco){ //função com parâmetros
//     alert('o produto é '+ produto +' e o preço é de R$' + preco) //função autoexecutavel, não é necessário fazer referencia 
// })('bolacha', 3.5); // parâmetros da função!


let x = prompt('Digite o primeiro valor') //prompt na qual será colocado o valor do X
let y = prompt('Digite o segundo valor') //prompt na qual será colocado o valor do Y

const soma = (x, y)=>{ //"arrow" function formada por tipo de função (const), nome da função (soma), parâmetros (X e Y), flecha (arrow) e chave ("{}}")
    let resultado = parseInt(x) + parseInt(y); //parse transforma os dados em variaveis para poder utilizar. Ex: parseInt, parseFloat, "Number" tambem pode ser incluso
    console.log(resultado); //retorno da função especificada acima
}

soma(x, y); //retorno da função chamada soma com os parâmetros X e Y
