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

Produto p = new Produto();

Console.WriteLine("Entre os dados do produto:");
Console.Write("Nome: ");
p.Nome = Console.ReadLine();
Console.Write("Preço: ");
p.Preco = Convert.ToDouble(Console.ReadLine());
Console.Write("Quantidade no estoque: ");
p.Quantidade = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("Dados do produto: " + p);