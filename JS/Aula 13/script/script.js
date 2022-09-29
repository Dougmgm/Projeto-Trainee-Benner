
// let Pessoas = { //Propriedade
//     nome: 'Steve Rogers', //Valor da propriedade
//     idade: 90,
//     heroi: 'Capitão América'
// }

// console.log(Pessoas.nome);

                                                //FOR IN

// for(let propriedades in Pessoas){
//     // console.log(propriedades);
//     console.log(Pessoas.nome);
//     console.log(Pessoas.idade);
//     console.log(Pessoas.heroi); //os valores no FOR IN estão vindo repetidos 
// }

                                                //FOR OF (propriedades em array)

// let frutas = ['melancia', 'manga', 'banana','uva']; // array

// for(let nomeFruta of frutas){
//     console.log(nomeFruta);
// }

let Herois =  [ 
    {
    
        nomeReal: 'Steve Rogers',   // indice 0
        heroi: 'Capitão América',

    }, // virgula aqui para separar os objetos

    {
    
        nomeReal: 'Tony Stark',     // indice 1
        heroi: 'Homem de Ferro',

    }, // virgula aqui para separar os objetos


]

// let marvel = Herois [0].heroi;
// console.log(marvel)
//                                     // Não permite ver ao mesmo tempo pois marvel já está declarado
// let marvel = Herois [1].heroi;
// console.log(marvel)

for(let marvel of Herois){
    console.log(marvel)
}

