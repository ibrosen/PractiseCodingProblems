using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;

namespace Q14
{
    class Program
    {
        static void Main(string[] args)
        {
            int maxNumToCheck = 1000000;
            long maxLen = Collatz(1);
            int maxNum = -1;
            for (int i = 1; i < maxNumToCheck; i++)
            {
                int collatzLen = CollatzRecurse(i);
                if (collatzLen > maxLen)
                {
                    maxLen = collatzLen;
                    maxNum = i;
                }
                    

            }
            Console.WriteLine(maxNum);
            Console.WriteLine(maxLen);
            Console.WriteLine(Collatz(837799));
            Console.Read();
        }

        //use longs!
        static int Collatz(long num)
        {
            int chainLen = 1;
            while (num != 1)
            {
                chainLen++;
                if (num % 2 == 0)
                {
                    num = num / 2;
                }

                else
                {
                    num = (3 * num) + 1;
                }
                    
            }

            return chainLen;
        }


        
        static int CollatzRecurse(long num)
        {
            if (num == 1)
                return 0;
            if (num % 2 == 0)
                return 1 + Collatz(num / 2);
            else
                return 1 + Collatz(3 * num + 1);

        }
    }
}
