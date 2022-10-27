import { clientes } from "/HTML/Desafio/module/clientes.js"
import { produtos } from "/HTML/Desafio/module/produtos.js"

const botaoEsquerda = document.querySelectorAll('.esquerda');
const botaoSair = document.querySelectorAll('.sair');
const botaoMov = document.querySelectorAll('#btnAjuste');

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
                TransicaoCliente(0);
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
                TransicaoProdutos(0);
            }
        } else{
            if(document.forms[2].style.display == 'block'){
                document.forms[2].style.display = 'none';
                document.forms[1].style.display = 'none';
                document.forms[0].style.display = 'none';
            }
            else{
                console.log('sadasdsad')
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
    form[2].value = clientes[posicao]["codCliente"]
    form[3].value = clientes[posicao]["nomeCliente"]
    form[4].value = clientes[posicao]["dataCadCli"]
    //.lenght -1 para pegar valor máximo e assim fazer incremento para botão novo
}

function TransicaoProdutos(posicao){
    let form = document.forms[1];
    form[2].value = produtos[posicao]["codProduto"]
    form[3].value = produtos[posicao]["descProduto"]
    form[4].value = produtos[posicao]["precoProduto"]
    form[5].value = produtos[posicao]["qtdEstoqueProd"]
}




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
