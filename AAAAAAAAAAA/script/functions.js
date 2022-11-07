var formPedido = document.querySelector('#formPedidos')
const pedidoTabela = document.querySelector('#itensPedido')
let itensPedido = []
let pedido = {}
const lista = document.forms.itensPedido.elements



function teste(event){
    event.preventDefault()

    const keys = {
        0: "codProduto",
        1: "descProduto",
        2: "precoProduto",
        3: "qtdEstoqueProd"
    }

    // Object.create 
    for (let index = 0; index < lista.length; index++) {
        if (index <= 3) {
            pedido[keys[index]] = lista[index].value
        }
    }
    
    itensPedido.push(pedido)
    console.log(itensPedido)
    listaTabela()
}

formPedido.addEventListener('submit', teste)

// function organizarTabela(){

//     for(item of itensPedido){
//         botao.addEventListener('click', ()=>{
            
//             let tabela = document.getElementById('tabelaPed')
//             let tr = tabela.insertRow();
        
//             let item = tr.insertCell();
//             let descricao = tr.insertCell();
//             let preco = tr.insertCell();
//             let qtd = tr.insertCell();
//             let subtotal = tr.insertCell();

//             item.innerText = item.codProduto
//             descricao.innerText = item.descProduto
//             preco.innerText = item.precoProduto
//             qtd.innerText = item.qtdEstoqueProd
//             // subtotal = (Number(valorQtd.value) * Number(valorPreco.value))
            
//         })
//     }
// }


function listaTabela() {
    
    let tbody = document.getElementById('tabelaPed')

    for(let i = 0; i < this.itensPedido.length; i++){
        let tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_descricao = tr.insertCell(); 
        let td_preco = tr.insertCell(); 
        let td_qtde = tr.insertCell(); 
        let td_subtotal = tr.insertCell(); 

        td_id.innerText = 2
        td_descricao.innerText = this.itensPedido[i].item.descProduto
        td_preco.innerText = this.itensPedido[i].item.precoProduto
        td_qtde.innerText = this.itensPedido[i].item.qtdEstoqueProd
        // td_subtotal.innerText = this.itensPedido[i].
    }
}