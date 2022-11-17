using POO.Models;

// Pessoa pessoa = new Pessoa();

// pessoa.Nome = "Douglas";
// pessoa.Idade = 24;

// pessoa.Apresentar();

// Pessoa pessoaNova = new Pessoa();

// pessoaNova.Nome = "Juliana";
// pessoaNova.Idade = 23;

// pessoaNova.Apresentar();

ContaCorrente cc = new ContaCorrente(50);

cc.Numero = 1234;
// cc.Saldo = 50; //tem que apagar o saldo pois ele está encapsulado para não poder ser alterado por alguem fora da classe 
cc.Sacar(30);
cc.ExibirSaldo();