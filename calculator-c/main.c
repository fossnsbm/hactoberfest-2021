#include <stdio.h>

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

int main()
{
    char op;
    double first, second;
    char exit;

    do{
        printf("Enter an operator (+, -, *, /): ");
        scanf(" %c", &op);
        printf("Enter two operands: ");
        scanf("%lf %lf", &first, &second);

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
        // operator doesn't match any case constant
        default:
            printf("Error! operator is not correct");
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