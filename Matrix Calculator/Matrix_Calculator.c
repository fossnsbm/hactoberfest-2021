#include<stdio.h>
#include<stdlib.h>

 int main()
 {
              
int r1,r2,c1,c2;
int i,j,k,p;
int md;
char go;
            
    //========frist Matrices input=========     
    printf("First Matrices Rows: ");
    scanf("%d",&r1);
    printf("First Matrices Colloms: ");
    scanf("%d",&c1);

        float arr1[r1][c1];
        
            printf("Enter first Matrices\n");
            for(i=0;i<r1;i++){
                for(j=0;j<c1;j++){
                scanf("%f",&arr1[i][j]);
                }
            }     
    //========second Matrices input=========   
    printf("\nSecod Matrices Row: ");
    scanf("%d",&r2);
    printf("Second Matrices Collom: ");
    scanf("%d",&c2);

        float arr2[r2][c2];
        
            printf("Enter Second Matrices\n");
            for(i=0;i<r2;i++){
                for(j=0;j<c2;j++){
                scanf("%f",&arr2[i][j]);
                }
            }

        printf("\n\n");

     //first Matrices printing
        printf("First Matrices\n");
        for(i=0;i<r1;i++){
            for(j=0;j<c1;j++){
            printf("%.0f ",arr1[i][j]);
            }
            printf("\n");
            }
        printf("\n");
     //second Matrices printing
            printf("Second Matrices\n");
                for(i=0;i<r2;i++){
                for(j=0;j<c2;j++){
                    printf("%.0f ",arr2[i][j]);
                    }
                printf("\n");
            }
    while (1)
        {

      //calculator menu
            printf("\n---------------------------");
        printf("\n  1. Matrices multification\n");
        printf("  2. Matrices Divide\n");
        printf("  3. Matrices sum\n");
        printf("  4. Matrices subtract\n");
        printf("  5. All\n");
        printf("  6. EXIT\n");
    
        printf("\nWhat do you want?: ");
        scanf("%d",&md);
            switch (md)
            {
            case 5:
                {
                case 1:
                {
                //Matrices multification logic
                    float mularr[r1][c2],mul;
                    for(i=0;i<r1;i++){
                        for(j=0;j<c2;j++){
                        mul=0;
                        for(k=0;k<c1;k++){
                            mul=mul+(arr1[i][k]*arr2[k][j]);
                        }
                        mularr[i][j]=mul;  
                        }
                    }
                        printf("\nMatrices Multification\n");
                        //printing output
                            for(i=0;i<r1;i++){
                                for(j=0;j<c2;j++){
                                printf("%.0f ",mularr[i][j]);
                                }
                                printf("\n");
                            }
                        }
                        if(md!=5){
                            break;
                        }
                case 2:
                        {
                        
                //Matrices Divide logic
                        float div,divarr[r1][c2];

                        for(i=0;i<r1;i++){
                        for(j=0;j<c2;j++){
                            div=0;
                            for(p=0;p<c1;p++){
                                div=div+(float)(arr1[i][p]/arr2[p][j]); 
                            }
                            divarr[i][j]=div;
                            }
                        }
                        printf("\nMatrices Divide\n");
                        for(i=0;i<r1;i++){
                            for(j=0;j<c2;j++){
                                printf("%.1f ",divarr[i][j]);
                            }
                            printf("\n");
                            }
                    
                        }if(md!=5){
                            break;
                        }
                
             //Matrices sum logic
                case 3:
                {
                    printf("\nMatrices Sum\n");
                    int sum[r1][c1];
                    for(i=0;i<r1;i++){
                        for(j=0;j<c1;j++){
                        sum[i][j]=(arr1[i][j]+arr2[i][j]);
                        printf("%d ",sum[i][j]);
                        }
                        printf("\n");
                    } 


                }if(md!=5){
                    break;
                }

                case 4:
                { 
             // Matrices sumbtract logic
                    printf("\nMatrices subtract\n");
                    int sub[r1][c1];
                    for(i=0;i<r1;i++){
                        for(j=0;j<c1;j++){
                        sub[i][j]=(arr1[i][j]-arr2[i][j]);
                        printf("%d ",sub[i][j]);
                        }
                        printf("\n");
                    } 
                }if(md!=5){
                    break;
                }

                case 6:
                    {
                    if(md==6){
                    system("cls");
                    printf("\n\tHave a nice Day!\n\n");
                        exit(0);
                    }
                }break;
                    
                default :
                    if(md!=6)
                    printf("Invalide Option");
                        
                }break;         
            } 
        
       //loop continue or exit

            printf("\nAnother calculation is required?(Y/N): ");
            scanf("%s",&go);
            if(go=='y')
            {
                printf("---------------------------------\n");
                break;
            }
        }

 }
          
