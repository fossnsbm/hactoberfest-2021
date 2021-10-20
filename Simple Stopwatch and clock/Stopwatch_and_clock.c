#include<stdio.h>
#include<stdlib.h>
#include<windows.h>

int main()
{
    int s,h,m;
    int want;
     
  //Get what the user wants

     printf("\n1. Stopwatch\n2. clock\n");
     printf("What do you want? ");
     scanf("%d",&want);
  
  //The user sets the time

     printf("Set time\n\n");
     printf("S = ");
     scanf("%d",&s);
     printf("M = ");
     scanf("%d",&m);
     printf("H = ");
     scanf("%d",&h);

             if(s>59||m>59||h>=12){
                   printf("Please enter valid time");
                     exit(0);
                     }

   switch(want)
      {

  //The logic of the stopwatch
      case 1:
       
           while(1){ 
                s--;
              if(s==0){
                  m--;
                  s=59;
              }
              if(m==-1){
                  h--;
                  m=59;
              }
              if(h==-1)
                 exit(0);
  //Stopwatch printing section

                  printf("\n\n\n\n\n\n\n\n\t\t\t\t\t\t........................");
                  printf("\n\t\t\t\t\t\t.");
                  printf("\t%.2d:%.2d:%.2d       .",h,m,s);
                  printf("\n\t\t\t\t\t\t........................");
                  Sleep(1000);
                 system("cls");
                   
            }break;

  //The logic of the stopwatch
      case 2:

          while(1)
          {
              s++;
            if(s>59){
                m++;
                s=0;
            }
            if(m>59){
                h++;
                m=0;  
            }
            if(h>=12)
                h=0;

   //clock printing section

                printf("\n\n\n\n\n\n\n\n\t\t\t\t\t\t........................");
                printf("\n\t\t\t\t\t\t.");
                printf("\t%.2d:%.2d:%.2d       .",h,m,s);
                printf("\n\t\t\t\t\t\t........................");
                  Sleep(1000);
                 system("cls");
           
            }break;

      default :printf("Please enter valid character");break;


       }   
    
}