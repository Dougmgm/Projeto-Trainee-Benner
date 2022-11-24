using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Globalization;

namespace Nova_pasta.Models
{
    public class Produto
    {
        public string? Nome;
        public double Preco;
        public int Quantidade;

        public double ValorTotalEstoque(){
           return Preco * Quantidade;
        }

        public override string ToString()
        {
            return Nome + ", $"+ Preco.ToString("F2", CultureInfo.InvariantCulture)+", " + Quantidade + " unidades, Total: $" 
            + ValorTotalEstoque().ToString("F2", CultureInfo.InvariantCulture);
        }
        public void AdicionarProdutos(){

        }
        public void RemoverProdutos(){

        }
    }
}