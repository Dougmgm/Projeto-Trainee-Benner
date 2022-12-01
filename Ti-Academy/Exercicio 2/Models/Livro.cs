using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exercicio_2.Models
{
    public class Livro : Autor
    {
        public string? NomeLivro { get; set; }

        public string? MyProperty { get; set; }

        List<string> autors = new List<string>{};
    }
}