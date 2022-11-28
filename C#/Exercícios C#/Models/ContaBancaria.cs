using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nova_pasta.Models
{
    public class ContaBancaria
    {
        public int Numero {get; private set;}
        public string? Titular;
        public double Saldo {get; private set;}

        public ContaBancaria (int numero, string titular, double saldo){
            Numero = numero;
            Titular = titular;
            Saldo = saldo;
        }

        public void Deposito(double quantia){
            Saldo = Saldo + quantia;
        }

        public void Saque(double quantia){
            Saldo = Saldo - quantia - 5;
        }

        public override string ToString()
        {
            return "Conta: " + Numero + ", Titular: " + Titular + ", Saldo: $ " + Saldo.ToString();
        }
    }
}