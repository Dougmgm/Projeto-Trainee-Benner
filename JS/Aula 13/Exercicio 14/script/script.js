


let frutas = [ //array

    {tipo: 'maça', preço: 2.50},
    {tipo: 'manga', preço: 3.30}

]

function listaFrutas(frutas){

for ( let itens of frutas){ //venda é o nome da variavel FOR OF que busca dados do ARRAY frutas
    for (let propriedade in itens){ //propriedade é o nome da variavel FOR IN que busca dados da variavel venda

        console.log(`Produto ${propriedade} -> ${itens[propriedade]}`)
    }
}

}

listaFrutas(frutas);