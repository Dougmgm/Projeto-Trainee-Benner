using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nova_pasta.Models
{
    public class Triangulo
    {
        public double A;
        public double B;
        public double C;
        
        public double Area99999(){
            double p = (A + B + C) / 2;
            double area = (Math.Sqrt(p*(p-A)*(p-B)*(p-C)));
            return area;
        } 
    }
}

