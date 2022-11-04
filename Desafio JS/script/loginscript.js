import { clientes } from "/HTML/Desafio/module/clientes.js"
import { produtos } from "/HTML/Desafio/module/produtos.js"

const botaoEsquerda = document.querySelectorAll('.esquerda');
const botaoSair = document.querySelectorAll('.sair');
const botaoMov = document.querySelectorAll('.btnAjuste');
const fecharPedCliente = document.querySelectorAll('.direitaPed');
const codClientePed = document.querySelector("#codClientePed")
const nomeClientePed = document.querySelector("#nomeClientePed")
const codigoPedido = document.querySelector("#codigoPedido")
const fecharPedProd = document.querySelector('#lançarPedido');


TransicaoCliente(1);
TransicaoProdutos(1);

function selecionarTela(){
    for(let botao of botaoEsquerda){    
        botao.addEventListener('click', (event) => {
    
            if(event.target.id == 'primeiro'){
                3
                if(document.forms[0].style.display == 'block'){
                    document.forms[0].style.display = 'none';
                    document.forms[1].style.display = 'none';
                    document.forms[2].style.display = 'none';
                }
                else{
                    document.forms[0].style.display = 'block'
                    document.forms[1].style.display = 'none';
                    document.forms[2].style.display = 'none';
                    
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
    
}

selecionarTela()

function sairTela(){
    for(let fechar of botaoSair){
        fechar.addEventListener('click', (event) => {
            event.target.form.style.display = 'none';
        })
    }
}

sairTela()

function TransicaoCliente(posicao){

    let form = document.forms[0];

    if(posicao===-1){
        form[2].value = clientes.length+1
        form[3].value = ''
        form[4].value = getDate()
    }
    else{
        if(posicao > clientes.length || posicao < 1){
            alert('Fim da lista')
        }
        else{
            form[2].value = clientes[posicao - 1]["codCliente"]
            form[3].value = clientes[posicao - 1]["nomeCliente"]
            form[4].value = clientes[posicao - 1]["dataCadCli"]
        }
    }
}

function getDate(){

    let data = new Date()
    return `${data.getUTCDate()}/${data.getMonth()+1}/${data.getFullYear()}`
}

function TransicaoProdutos(posicao){

    let form = document.forms[1];

    if(posicao === -1){
        form[2].value = produtos.length+1
        form[3].value = ''
        form[4].value = ''
        form[5].value = ''
    } else {
        if(posicao > produtos.length || posicao < 1){
            alert('Fim da lista')
        }
    }
    form[2].value = produtos[posicao - 1]["codProduto"]
    form[3].value = produtos[posicao - 1]["descProduto"]
    form[4].value = produtos[posicao - 1]["precoProduto"]
    form[5].value = produtos[posicao - 1]["qtdEstoqueProd"]
}

function movCliente(){
    for(let botao of botaoMov){
        botao.addEventListener('click', (mover) =>{
    
            let pos = mover.target.form[2].value
            
    
            if(mover.target.id == 'antCliente'){
                TransicaoCliente(Number(pos) - 1)
            } else if(mover.target.id == 'proxCliente') {
                TransicaoCliente(Number(pos) + 1)
            } else if (mover.target.id == 'novoCliente'){
                TransicaoCliente(-1)
            } else if (mover.target.id == 'salvarCliente'){
                if(document.forms[0][2].value == clientes.length + 1 && document.forms[0][3].value != ''){
                    clientes.push(
                        {
                            "codCliente"   : document.forms[0][2].value,
                            "nomeCliente"  : document.forms[0][3].value,
                            "dataCadCli" : document.forms[0][4].value,
                        }
                    )
                    alert('Dados salvos com sucesso')
                }
                else{
                    alert('Por favor preencher os dados')
                }
            }
        })
    }
    
}

movCliente()


function movProduto(){
    for(let botao of botaoMov){
        botao.addEventListener('click', (mover)=>{
    
            let pos = mover.target.form[2].value
    
            if(mover.target.id == 'antProd'){
                TransicaoProdutos(Number(pos) - 1)
            } else if (mover.target.id == 'proxProd') {
                TransicaoProdutos(Number(pos) + 1)
            } else if(mover.target.id == 'novoProd'){
                TransicaoProdutos(-1)
            } else if (mover.target.id == 'salvarProd'){
                if(document.forms[1][2].value == produtos.length+1 && document.forms[1][3].value && document.forms[1][4].value && document.forms[1][5].value != ''){
                    produtos.push(        
                        {
                        "codProduto"   : document.forms[1][2].value,
                        "descProduto"    : document.forms[1][3].value,
                        "precoProduto" : document.forms[1][4].value, 
                        "qtdEstoqueProd" : document.forms[1][5].value,   
                      },  
              )
              alert('Dados salvo com sucesso')
                } else {
                    alert('Por favor preencher os dados')
                }
            }
        })
    }
    
}

movProduto()

function limpaClientes(){
    codClientePed.value = ''
    nomeClientePed.value = ''
    codigoPedido.value = ''
    buscarPreco.value = ''
    buscarDesc.value = ''
    buscarQtde.value = ''
}

function limpaPedidos(){
    codigoPedido.value = ''
    buscarQtde.value = ''
}

function getData(){
    for(let botao of fecharPedCliente){
        botao.addEventListener("focusout", ()=>{
    
            
            let x = Number(codClientePed.value)
    
            if(Number(codClientePed.value) > clientes.length){
                alert("Favor colocar um código válido")
                limpaClientes()
            }else{
                x == clientes[x - 1]["codCliente"]
                nomeClientePed.value = clientes[x - 1]["nomeCliente"]
            }
        })

        botao.addEventListener("focusout", ()=>{
    
            if(Number(codigoPedido.value) > produtos.length){
                alert("Favor colocar um código válido")
                limpaPedidos()
            }

            let y = Number(codigoPedido.value)
    
            y = produtos[y - 1]["codProduto"]
            buscarDesc.value = produtos[y - 1]["descProduto"]
            buscarPreco.value = produtos[y - 1]["precoProduto"]
            if(buscarQtde.value > produtos[y - 1]["qtdEstoqueProd"]){
                alert('Favor colocar uma quantidade válida')
                limpaPedidos()
            }
        })
    }
}

getData()

function organizarTabela(){

    for(botao of fecharPedProd){
        botao.addEventListener('click', ()=>{
            
            let tabela = document.getElementById('tabelaPed')
            let tr = tabela.insertRow();
        
            let item = tr.insertCell();
            let descricao = tr.insertCell();
            let preco = tr.insertCell();
            let qtd = tr.insertCell();
            let subtotal = tr.insertCell();

            item.innerText = codigoPedido.value
            descricao.innerText = buscarDesc.value
            preco.innerText = buscarPreco.value
            qtd.innerText = buscarQtde.value
            subtotal = (Number(valorQtd.value) * Number(valorPreco.value))
            
        })
    }
}

organizarTabela()




//for(let botao of fecharPedCliente){
   // botao.addEventListener("focusout", ()=>{

      //  let x = codClientePed.value

     //   if(codClientePed.value == clientes[x - 1]["codCliente"]){
     //   nomeClientePed.value = clientes[x - 1]["nomeCliente"]
     //   } else if(codClientePed.value > clientes.length || codClientePed.value < clientes.length) {
    //        alert('Favor colocar um código válido')
   //     }
 //   })
//}

//for(let botao of fecharPedProd){
   // botao.addEventListener("focusout", ()=>{

    //    let x = codigoPedido.value

    //    if(codigoPedido.value == produtos[x - 1]["codProduto"]){
    //        buscarDesc.value = produtos[x - 1]["descProduto"]
      //      buscarPreco.value = produtos[x - 1]["precoProduto"]
    //        buscarQtde.value = produtos[x - 1]["qtdEstoqueProd"]
    //    }
//    })
//}




// const clientesCodPed = clientes["codCliente"]
// const clientesNomePed = clientes["nomeCliente"]

// if(clientesCodPed == codClientePed){
//     clientesNomePed == nomeClientePed
// } else {
//     // alert('Colocar um código valido')
// }



//puxa dos clientes e depois puxa dos produtos





// for(let botao of botaoMov){
//     botao.addEventListener('click', (mover) =>{

//         let pos = mover.target.form[2].value
//         let ultimo = (produtos.length + 1)

//         if(mover.target.id == 'antProd'){
//             TransicaoProdutos(Number(pos) - 1)
            
//         } else if(mover.target.id == 'proxProd') {
//             TransicaoProdutos(Number(pos) + 1)
//         } else if(mover.target.id == 'novoProd') {
//             TransicaoProdutos(ultimo)
//         } 
//     })
// }










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
        
