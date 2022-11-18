using POO.Models;

// Pessoa pessoa = new Pessoa();

// pessoa.Nome = "Douglas";
// pessoa.Idade = 24;

// pessoa.Apresentar();

// Pessoa pessoaNova = new Pessoa();

// pessoaNova.Nome = "Juliana";
// pessoaNova.Idade = 23;

// pessoaNova.Apresentar();

// ContaCorrente cc = new ContaCorrente(50);

// cc.Numero = 1234;
// // cc.Saldo = 50; //tem que apagar o saldo pois ele está encapsulado para não poder ser alterado por alguem fora da classe 
// cc.Sacar(30);
// cc.ExibirSaldo();

// Aluno a1 = new Aluno();

// a1.Nome = "Douglas"; //Aluno herda nome da classe Pessoa
// a1.Idade = 24;
// a1.Nota = 80; //Já nota vem da classe Aluno 
// a1.Apresentar();

//Crie um algoritmo que verifique se um número informado é par ou impar

// int par = 0;
// int teste = 0;

// Console.WriteLine("Escrava um número");
// par = Convert.ToInt32(Console.ReadLine());

// teste = par % 2;

// if(teste == 1){
//     Console.WriteLine("Seu número é impar");
// } else {
//     Console.WriteLine("Seu número é par");
// }

//Faça um algoritmo que exiba quantas pessoas possuem mais de 18 anos. O algoritmo deverá ler a idade de 10 pessoas.

// int qtde = 0;
// int idade = 0;

// Console.WriteLine();

// int i = 0;

// while(i < 10){

//     i = i + 1;

//     Console.WriteLine("Informe a idade das pessoas");

//     idade = Convert.ToInt32(Console.ReadLine());

//     if (idade >= 18){
//         qtde = qtde + 1;
//     }
// }

// Console.WriteLine($"A quantidade de pessoas acima de 18 anos é: {qtde}");

/*Faça um algoritmo que calcule e exiba o salário reajustado de dez funcionários de acordo com a seguinte 
regra: Salário até 300, reajuste de 50%; Salários maiores que 300, reajuste de 30%.*/   

double reajustado, salario = 0;

for (int i = 0; i < 10; i++){

    Console.Write("Escreva o salário dos funcionário: ");
    salario = Convert.ToDouble(Console.ReadLine());

    if(salario <= 300) {
        reajustado = (salario * 0.5) + salario;
        Console.WriteLine($"O valor do {i}° salário reajustado será de {reajustado}");
        
        } else {
        reajustado = (salario * 0.3) + salario;
        Console.WriteLine($"O valor do {i}° salário reajustado será de {reajustado}");
        }
    }       


// Console.WriteLine(  "digite o salario dos funcionários" );

// double reajuste;

// for(int i = 1; i <= 10; i++){ 
//     Console.Write($"{i}°: ");
//     double salario = double.Parse(Console.ReadLine());
//     if(salario > 300.00){
//             reajuste = 0.5 * salario;
//             salario += reajuste;
//         }else{
//             reajuste = 0.3 * salario;
//             salario += reajuste;
//         }
//         Console.WriteLine($"O valor do {i}° salário reajustado será de {salario}");
// }

//Faça um algoritmo que leia a altura e a matricula de dez alunos. Mostre a matricula do aluno mais alto e do aluno mais baixo.


// int i = 0;
// while(i < 10){
//     Console.WriteLine("Escreva a matrícula do aluno");
//     double matricula = Convert.ToDouble(Console.ReadLine());

//     Console.WriteLine("Escreva a altura do aluno");
//     double altura = Convert.ToDouble(Console.ReadLine());
// }
