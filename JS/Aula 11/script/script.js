// function Pesssoa(nome){

//     this.nome = nome; // com o "this" é reconhecido que é objeto  

//     // this.msg = function(){ //metodo
//     //     alert('Olá');
//     // }

//     Pesssoa.prototype.msg = function(){ //mesma coisa que o de cima
//         alert('Olá ' + this.nome); //o this.nome irá buscar o parametro pessoa com os valores conforme o let abaixo
// }
// }

// let NovaPessoa = new Pesssoa('José');
// let OutraPessoa = new Pesssoa('Maria');

// NovaPessoa.msg(); // busca código da linha 9
// OutraPessoa.msg(); // herdou também o código da linha 9
// // console.log(NovaPessoa.nome);


// console.log(NovaPessoa)


                                                //OUTRA FORMA DE CRIAR OBJETOS


let Pessoa2 = {
    'nome': '',
    'idade': ''
}

// console.log(Pessoa2);
Pessoa2.__proto__.msg = function(){
    alert(`Olá ${Pessoa2.nome}`);
}
let P = Pessoa2
P.nome = 'Marcelo';
P.msg();
console.log(P);