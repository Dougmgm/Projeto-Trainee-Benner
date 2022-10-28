import { clientes } from "/HTML/Desafio/module/clientes.js"
import { produtos } from "/HTML/Desafio/module/produtos.js"

const botaoEsquerda = document.querySelectorAll('.esquerda');
const botaoSair = document.querySelectorAll('.sair');
const botaoMov = document.querySelectorAll('.btnAjuste');

for(let botao of botaoEsquerda){    
    botao.addEventListener('click', (event) => {

        if(event.target.id == 'primeiro'){
            if(document.forms[0].style.display == 'block'){
                document.forms[0].style.display = 'none';
                document.forms[1].style.display = 'none';
                document.forms[2].style.display = 'none';
            }
            else{
                document.forms[0].style.display = 'block'
                document.forms[1].style.display = 'none';
                document.forms[2].style.display = 'none';
                TransicaoCliente(1);
            }
        } else if(event.target.id =='segundo'){
            if(document.forms[1].style.display == 'block'){
                document.forms[1].style.display = 'none';
                document.forms[0].style.display = 'none';
                document.forms[2].style.display = 'none';
            }
            else{
                document.forms[1].style.display = 'block';
                document.forms[0].style.display = 'none';
                document.forms[2].style.display = 'none';
                TransicaoProdutos(1);
            }
        } else{
            if(document.forms[2].style.display == 'block'){
                document.forms[2].style.display = 'none';
                document.forms[1].style.display = 'none';
                document.forms[0].style.display = 'none';
            }
            else{
                document.forms[2].style.display = 'block';
                document.forms[1].style.display = 'none';
                document.forms[0].style.display = 'none';
            }
        }
    })
}

for(let fechar of botaoSair){
    fechar.addEventListener('click', (event) => {
        event.target.form.style.display = 'none';
    })
}

function TransicaoCliente(posicao){
    let form = document.forms[0];
    form[2].value = clientes[posicao-1]["codCliente"]
    form[3].value = clientes[posicao-1]["nomeCliente"]
    form[4].value = clientes[posicao-1]["dataCadCli"]
    //.lenght -1 para pegar valor máximo e assim fazer incremento para botão novo
}

function TransicaoProdutos(posicao){
    let form = document.forms[1];
    form[2].value = produtos[posicao-1]["codProduto"]
    form[3].value = produtos[posicao-1]["descProduto"]
    form[4].value = produtos[posicao-1]["precoProduto"]
    form[5].value = produtos[posicao-1]["qtdEstoqueProd"]
}


for(let botao of botaoMov){
    botao.addEventListener('click', (mover) =>{

        let pos = mover.target.form[2].value

        if(mover.target.id == 'btnAnterior'){
            TransicaoCliente(Number(pos) -1)
        } else if(mover.target.id == 'btnProximo') {
            TransicaoCliente(Number(pos)+1)
        }
    })
}

for(let botao of botaoMov){
    botao.addEventListener('click', (mover) =>{

        let pos = mover.target.form[2].value

        if(mover.target.id == 'btnAnterior'){
            TransicaoProdutos(Number(pos) -1)
        } else if(mover.target.id == 'btnProximo') {
            TransicaoProdutos(Number(pos)+1)
        } 
    })
}



        // for(let botao of botaoMov){
        //     botao.addEventListener('click', (mover) =>{
        //         let pos = mover.target.form[2].value
        //         if(mover.target.id == 'btnAnterior'){
        //             if(form == clientes)
        //                 TransicaoCliente(Number(pos) -1)
        //             else
        //                 TransicaoProdutos
        //                 TransicaoProdutos(Number(pos) -1)
        //         } else {
        //             TransicaoCliente(Number(pos)+1)
        //         }
        
        //     })
        // }

// let x;
        // if(event.target.id == "primeiro")
        //     x = 0;
        // else if(event.target.id == "segundo")
        //     x = 1;
        // else
        //     x = 2;

        // if(document.forms[x % 3].style.display == 'block'){
        //     document.forms[x % 3].style.display = 'none'
        //     document.forms[x+1 % 3].style.display = 'none';
        //     document.forms[x+2 % 3].style.display = 'none';
        // }
        // else{
        //     document.forms[x % 3].style.display = 'block'
        //     document.forms[x+1 % 3].style.display = 'none';
        //     document.forms[x+2 % 3].style.display = 'none';
        // }

        // function teste(x, y){
        //     console.log(x, y);
        // }
        
        // teste(5, 10);
        
