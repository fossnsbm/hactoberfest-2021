#include<stdio.h>

int main()
{
               int nday,nmonth,nyear;
               int bday,bmonth,byear;
               int days,monts,years;
               int i;
               char go;
                printf("\n-----------------------Birth day calculator-----------------------\n");
     while (1)
                
         {  
                  printf("\n------------------------------------------\n");
                  printf("Enter date of today(like this YYYY MM DD): ");
                  scanf("%d %d %d",&nyear,&nmonth,&nday);
                  printf("Enter your birth day(like this YYYY MM DD): ");
                  scanf("%d %d %d",&byear,&bmonth,&bday);
                   printf("\n");
             if(bmonth<=nmonth)
               {
                     if(bday<=nday){
                        monts=nmonth-bmonth;
                        days=nday-bday;
                        years=nyear-byear;    
                        printf("Your Age is %d years %d months %d days",years,monts,days);
                               }
                  
                     else if(bday>=nday){
                        for(i=0;i<1;i++){
                          nday+=30;
                          nmonth--;
                          monts=nmonth-bmonth;
                          days=nday-bday;
                          years=nyear-byear;
                        }                
                       printf("Your Age is %d years %d months %d days",years,monts,days);
                     }
               }
               
            else if(bmonth>=nmonth)
              {
                     if(bday<=nday)
                       for(i=0;i<1;i++){
                         nmonth+=12;
                         nyear--;
                         monts=nmonth-bmonth;
                         days=nday-bday;
                         years=nyear-byear;
                     printf("Your Age is %d years %d months %d days",years,monts,days);
                       }

                     else if(bday>=nday)
                       for(i=0;i<1;i++){
                         nday+=30;
                         nmonth+=11;
                         nyear--;
                         monts=nmonth-bmonth;
                         days=nday-bday;
                         years=nyear-byear;
                     printf("Your Age is %d years %d months %d days",years,monts,days);
                       }
              }
              
               printf("\n\nExit?(Y/N): ");
                scanf("%s",&go);
                if(go=='y'){
                  printf("------------------------------------------\n");
                break;
                }

         }
         
}