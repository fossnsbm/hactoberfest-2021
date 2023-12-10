#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int rps(char you , char comp){
    if(you == comp){
       return 0;
    }

    if(you=='r' && comp=='p'){
        return -1;
    }
    else if(you=='p' && comp=='r'){
        return 1;
    }

    if(you=='r' && comp=='s'){
        return 1;
    }
    else if(you=='s' && comp=='r'){
        return -1;
    }

    if(you=='p' && comp=='s'){
        return -1;
    }
    else if(you=='s' && comp=='p'){
        return 1;
    }

}

int main(int argc, char const *argv[])
{
    char you;
    char comp = 's';
    srand(time(0));
    int number = rand()%100 + 1;

    if(number<33){
        comp='r';
    }
    else if(number>33 && number<66){
        comp = 'p';
    }
    else{
        comp = 's';
    }

    printf("choose 'r' for rock, 'p' for paper and 's' for scissor\n");
    scanf("%c" , &you);
    printf("you chose %c and comp chose %c.\n" , you , comp);

    int result = rps(you , comp);
    if(result==0){
        printf("match is draw\n");
    }
    else if(result==1){
        printf("cangrats you won the game.\n");
    }
    else{
        printf("sorry you loose pls try again.\n");
    }

    return 0;
}
