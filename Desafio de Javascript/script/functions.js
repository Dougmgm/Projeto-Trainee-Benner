
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
        listaTabela()
        somaTotal.style.display = 'block';
    
}

formPedido.addEventListener('submit', teste)

function listaTabela(){
    if(codigoPedido.value != ''){
    let tbody = document.getElementById('tabelaPed')
        let tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_descricao = tr.insertCell(); 
        let td_preco = tr.insertCell(); 
        let td_qtde = tr.insertCell(); 
        let td_subtotal = tr.insertCell();
        let subtotal =  buscarPreco.value * buscarQtde.value

        td_id.innerText = codigoPedido.value
        td_descricao.innerText = buscarDesc.value
        td_preco.innerText = buscarPreco.value
        td_qtde.innerText = buscarQtde.value

        td_subtotal.innerText ='R$ ' + subtotal
        soma.value = (Number(soma.value) + (Number(buscarPreco.value) * Number(buscarQtde.value))).toFixed(2);
    } else {
        alert('Favor preencher com os dados')
    }
}



