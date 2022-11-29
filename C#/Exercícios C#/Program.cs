using System.Globalization;
using Nova_pasta.Models;

// Triangulo x, y;

// Triangulo x = new Triangulo();
// Triangulo y = new Triangulo();

// Console.WriteLine("Entre com as medidas do triangulo X:");
// x.A = Convert.ToDouble(Console.ReadLine());
// x.B = Convert.ToDouble(Console.ReadLine());
// x.C = Convert.ToDouble(Console.ReadLine());

// Console.WriteLine("Entre com as medidas do triangulo Y:");
// y.A = Convert.ToDouble(Console.ReadLine());
// y.B = Convert.ToDouble(Console.ReadLine());
// y.C = Convert.ToDouble(Console.ReadLine());

// double areaX = x.Area();
// double areaY = y.Area();

// Console.WriteLine($"A area do triangulo X é de {areaX} e a area do triangulo Y é de {areaY}");

//Exercício 1

// Pessoa p1 = new Pessoa();
// Pessoa p2 = new Pessoa();

// Console.WriteLine("Escreva o nome e idade da primeira pessoa");
// p1.Nome = Console.ReadLine();
// p1.Idade = Convert.ToInt32(Console.ReadLine());
// Console.WriteLine("Escreva o nome e idade da segunda pessoa");
// p2.Nome = Console.ReadLine();;
// p2.Idade = Convert.ToInt32(Console.ReadLine());

// if(p1.Idade > p2.Idade){
//     Console.WriteLine($"{p1.Nome} é a pessoa mais velha");
// } else {
//     Console.WriteLine($"{p2.Nome} é a pessoa mais velha");
// }

//Exercício 2

// Pessoa p3 = new Pessoa();
// Pessoa p4 = new Pessoa();

// Console.WriteLine("Escreva o nome da primeira pessoa");
// p3.Nome = Console.ReadLine();

// Console.WriteLine("Escreva o salario da primeira pessoa");
// p3.Salario = Convert.ToDouble(Console.ReadLine());;

// Console.WriteLine("Escreva o nome da segunda pessoa");
// p4.Nome = Console.ReadLine();

// Console.WriteLine("Escreva o salario da segunda pessoa");
// p4.Salario = Convert.ToDouble(Console.ReadLine());;

// double media = (p3.Salario + p4.Salario) / 2;
// Console.WriteLine($"A média salarial é {media}");

//Exercicio 3

/*
Produto p = new Produto();

Console.WriteLine("Entre os dados do produto:");
Console.Write("Nome: ");
p.Nome = Console.ReadLine();
Console.Write("Preço: ");
p.Preco = Convert.ToDouble(Console.ReadLine());
Console.Write("Quantidade no estoque: ");
p.Quantidade = Convert.ToInt32(Console.ReadLine());

Console.WriteLine();
Console.WriteLine("Dados do produto: " + p);

Console.WriteLine();
Console.WriteLine("Digite o número de produtos a ser adicionada no estoque: ");
int qtde = int.Parse(Console.ReadLine());
p.AdicionarProdutos(qtde);

Console.WriteLine("Dados atualizados: " + p);

Console.WriteLine("Digite o número de produtos a ser retirados no estoque: ");
qtde = int.Parse(Console.ReadLine());
p.RemoverProdutos(qtde);

Console.WriteLine();
Console.WriteLine("Dados atualizados: " + p);
*/

//Exercício de fixação 1

/*
Retangulo ret = new Retangulo();

Console.WriteLine("Entre a altura do retangulo");
ret.Altura = Convert.ToDouble(Console.ReadLine());

Console.WriteLine("Entre a largura do retangulo");
ret.Largura = Convert.ToDouble(Console.ReadLine());

Console.WriteLine("Area = " + ret.Area().ToString());
Console.WriteLine("Perimetro = "+ ret.Perimetro().ToString());
Console.WriteLine("Diagonal = " + ret.Diagonal().ToString());
*/

//Exercício de fixação 2

/*Funcionario func = new Funcionario();

Console.Write("Digite o nome: ");
func.Nome = Console.ReadLine();
Console.Write("Digite o salário bruto: ");
func.SalarioBruto = double.Parse(Console.ReadLine());
Console.Write("Digite o imposto: ");
func.Imposto = double.Parse(Console.ReadLine());

Console.WriteLine();
Console.WriteLine("Funcionário: " + func);
Console.WriteLine();

Console.Write("Digite a porcentagem para aumentar o salário:" );
double porcent = double.Parse(Console.ReadLine());
func.AumentarSalario(porcent);
Console.WriteLine();

Console.WriteLine("Dados atualizados: "  + func);
*/

//Exercício de fixação 3

/*Aluno estudante = new Aluno();

Console.Write("Digite o nome do aluno: ");
estudante.Nome = Console.ReadLine();
Console.WriteLine("Digite as notas de cada trimestre");
estudante.Nota1 = double.Parse(Console.ReadLine());
estudante.Nota2 = double.Parse(Console.ReadLine());
estudante.Nota3 = double.Parse(Console.ReadLine());
Console.WriteLine("Nota final = " + estudante.Soma());
if(estudante.Soma() < 60){
    Console.WriteLine("Reprovado");
    Console.WriteLine("Faltaram " + estudante.Restante() + " pontos");
} else {
    Console.WriteLine("Aprovado");
}*/

//Exercicio 3 com contrutor 

// Produto p = new Produto("TV", 500.0, 10); // ---> Com o construtor é necessário passar os valores dentro do produto
/*
Console.WriteLine("Entre os dados do produto:");
Console.Write("Nome: ");
string nome = Console.ReadLine(); // cria variavel auxiliar apenas para receber dados digitados
Console.Write("Preço: ");
double preco = Convert.ToDouble(Console.ReadLine()); // cria variavel auxiliar apenas para receber dados digitados
Console.Write("Quantidade no estoque: ");
int quantidade = Convert.ToInt32(Console.ReadLine()); // cria variavel auxiliar apenas para receber dados digitados

Produto p = new Produto(nome, preco, quantidade); //--->instancia o produto já informando os dados


Console.WriteLine();
Console.WriteLine("Dados do produto: " + p);

Console.WriteLine();
Console.WriteLine("Digite o número de produtos a ser adicionada no estoque: ");
int qtde = int.Parse(Console.ReadLine());
p.AdicionarProdutos(qtde);

Console.WriteLine("Dados atualizados: " + p);

Console.WriteLine("Digite o número de produtos a ser retirados no estoque: ");
qtde = int.Parse(Console.ReadLine());
p.RemoverProdutos(qtde);

Console.WriteLine();
Console.WriteLine("Dados atualizados: " + p);
*/

/*
Produtos p = new Produtos("TV", 500, 10);

Console.WriteLine(p.GetNome()); // linha obtem dados de cima
p.SetNome("TV 4K");
Console.WriteLine(p.GetNome()); //linha obtem dados da função SetNome e chamada pela p.GetNome  
*/

//Auto-Property

// Produtos p = new Produtos("TV", 500, 10);

// Console.WriteLine(p.GetNome()); // linha obtem dados de cima
// p.SetNome("TV 4K");
// Console.WriteLine(p.GetNome()); //linha obtem dados da função SetNome e chamada pela p.GetNome  

//Exercício de fixação Construtores

/*
ContaBancaria conta;

Console.Write("Entre o número da conta: ");
int numero = int.Parse(Console.ReadLine());
Console.Write("Entre o títular da conta: ");
string? titular = Console.ReadLine();
Console.Write("Haverá deposito inicial (s/n): ");
char resposta = char.Parse(Console.ReadLine());
if (resposta == 's'){
    Console.Write("Entre o valor do depósito inicial: ");
    double depositoInicial = double.Parse(Console.ReadLine());
    conta = new ContaBancaria(numero, titular, depositoInicial);
} else {
    conta = new ContaBancaria(numero, titular);
}

Console.WriteLine();
Console.Write("Dados da conta: " + conta);
Console.WriteLine();

Console.Write("Entre um valor para depósito: ");
double deposito = double.Parse(Console.ReadLine());
conta.Deposito(deposito);
Console.Write("Dados atualizados: " + conta);

Console.WriteLine();
Console.Write("Entre um valor para o saque: ");
double saque = double.Parse(Console.ReadLine());
conta.Saque(saque);
Console.Write("Dados atualizados: " + conta);
*/

//Struct
/*
Point p;
// Console.WriteLine(p); // Irá dar erro pois é uma variável não atribuída (não foi inicializada)
p.X = 10;
p.Y = 20;
Console.WriteLine(p); // Não dará mais erro pois definiu X e Y
p = new Point();
Console.WriteLine(p); //Colocando o "new" ele acaba inicializando com valor 0
*/

//Garbage Collector : Automatiza gerenciamento de memória de RAM de um programa em execução 

//Vetores

/*Exercicio 1: Fazer um programa para ler um número inteiro N e a altura de N pessoas.
Armazene as N alturas em um vetor. Em seguida, mostrar a altura média dessas
pessoas.*/


Console.Write("Escreva a quantidade alturas: ");
int qtd = int.Parse(Console.ReadLine());

double[] vetor = new double [qtd]; //Colchetes indica vetor

for (int i = 0; i < qtd; i++){
    vetor[i] = double.Parse(Console.ReadLine());
}

double soma = 0;
for(int i = 0; i < qtd; i++){
    soma = soma + vetor[i];
}

double media = soma / qtd;

Console.Write("A média das alturas é de: " + media.ToString("F2"));