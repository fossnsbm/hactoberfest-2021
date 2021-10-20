#include <stdio.h>
#include<math.h>

/*
gcc -o calculator main.c - compile instructions 
ELF 64-bit LSB pie executable, x86-64 - bianry file 


[*] '/hactoberfest-2021/calculator-c/calculator'
    Arch:     amd64-64-little
    RELRO:    Partial RELRO
    Stack:    Canary found
    NX:       NX enabled
    PIE:      PIE enabled

*/

// function for Binary Addition
int binAddition(int a, int b)
{
    int c; //carry
    while (b != 0) {
        //find carry and shift it left
        c = (a & b) << 1;
        //find the sum
        a = a ^ b;
        b = c;
    }
    return a;
}

// function for Binary Subtraction
int binSubtracton(int a, int b)
{
    int carry;
    //get 2's compliment of b and add in a
    b = binAddition(~b, 1);

    while (b != 0) {
        //find carry and shift it left
        carry = (a & b) << 1;
        //find the sum
        a = a ^ b;
        b = carry;
    }
    return a;
}


int main()
{
    char op, type;
    double first, second;
    char exit;
    int binAdd, binSub, number1, number2, x, y;

    do{
        printf("Choose Binary or Decimal (B/D): ");
        scanf("%c", &type);
        
        switch(type)
        {
            case 'D':
                printf("Enter first operand: ");
                scanf("%lf", &first);
                printf("Enter an operator (+, -, *, /,^): ");
                scanf(" %c", &op);
                printf("Enter second operand: ");
                scanf("%lf", &second);
                
                switch (op)
                {
                    case '+':
                        printf("%.1lf + %.1lf = %.1lf\n", first, second, first + second);
                        break;
                    case '-':
                        printf("%.1lf - %.1lf = %.1lf\n", first, second, first - second);
                        break;
                    case '*':
                        printf("%.1lf * %.1lf = %.1lf\n", first, second, first * second);
                        break;
                    case '/':
                        printf("%.1lf / %.1lf = %.1lf\n", first, second, first / second);
                        break;
                    case '^':
                         printf("%.1lf ^ %.1lf = %.1lf\n", first, second, pow(first,second));
                         break;
                    // operator doesn't match any case constant
                    default:
                        printf("Error! operator is not correct");
                }
                
             case 'B':
                printf("Enter first operand: ");
                scanf("%d", &number1);
                printf("Enter an operator (+, -): ");
                scanf(" %c", &op);
                printf("Enter second operand: ");
                scanf("%d", &number2);
                
                switch (op)
                {
                    case '+':
                        binAdd = binAddition(number1, number2);
                        printf("%d + %d = %d\n", number1, number2, binAdd);
                        break;
                    case '-':
                        binSub = binSubtracton(number1, number2);
                        printf("%d - %d = %d\n", number1, number2, binSub);
                        break;
                    // operator doesn't match any case constant
                    default:
                        printf("Error! operator is not correct");
                }

        }

        // repeating until user provide correct input
        do
        {
            printf("want to exit (y/n) : ");
            scanf(" %c", &exit);
        } while (exit != 'y' && exit != 'n');
        
    
    }while ( exit == 'n');

    //out of calculator
    printf("*** Hava a nice day :) ***");

    return 0;
}
