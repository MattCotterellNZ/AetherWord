using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AetherWord.Core;

namespace AetherWord.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            var _generatorService = new GeneratorService();
            
            System.Console.Write("Domain: ");
            var domain = System.Console.ReadLine();

            if (String.IsNullOrWhiteSpace(domain))
            {
                return;
            }

            System.Console.Write("Master Password: ");
            var masterPassword = System.Console.ReadLine();

            if (String.IsNullOrWhiteSpace(masterPassword))
            {
                return;
            }

            System.Console.Clear(); // TODO: This is pretty amateur, need to find a way to mask password on input
            System.Console.WriteLine("Domain: {0}", domain);
            var maskedPassword = new StringBuilder();
            for (var i = 0; i < masterPassword.Length; i++)
            {
                maskedPassword.Append('*');
            }
            System.Console.WriteLine("Master Password: {0}", maskedPassword);
            System.Console.WriteLine();
            System.Console.WriteLine("AetherWord for {0}:", domain);
            System.Console.WriteLine(_generatorService.GetAetherWord(domain, masterPassword));
            System.Console.ReadLine();
        }
    }
}
