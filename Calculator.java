import java.util.Scanner;
public class Calculations
{
 double resultSum;
 double resultSub;
 double resultMult;
 double resultDiv;
 double resultModDiv;
 public static void main(String args[])
 {
  Calculations Calculator = new Calculations(); 
  
  Scanner in = new Scanner(System.in);
  System.out.println("Enter an operation to calculate the value of the entered digits.\n Either +(addition),\n -(subtraction),\n *(multiplication),\n /(division)\n or %(modular division).\nType 'quit' to exit program.");
  String input = in.next();  
  while(!(input.equals("quit")))
  {
   Calculator.resultSum = 0;
   Calculator.resultSub = 0;
   Calculator.resultMult = 1;
   Calculator.resultDiv = 0;
   Calculator.resultModDiv = 0;
   if(input.equals("+"))
   {
    Calculator.Addition();
    Calculator.displayResultSum();
   }
   else if(input.equals("-"))
   {
    Calculator.Subtraction();
    Calculator.displayResultSub();
   }
   else if(input.equals("*"))
   {
    Calculator.Multiplication();
    Calculator.displayResultMult();
   }
   else if(input.equals("/"))
   {
    Calculator.Division();
    Calculator.displayResultDiv();
   }
   else if(input.equals("%"))
   {
    Calculator.ModDivision();
    Calculator.displayResultModDiv();
   }
   else
   {
    System.out.println("That is an invalid operation, please try again.");
   }

   System.out.println("Enter an operation to calculate the value of the entered digits. Either +, -, *, / or %.\nType 'quit' to exit program.");
   input = in.next();
  }
 }
 
 public Calculations()
 {
  resultSum = 0;
  resultSub = 0;
  resultMult = 1;
  resultDiv = 0;
  resultModDiv = 0;     
 }
  
 public void Addition()
 {
  System.out.println("Enter values to add (maximum of 1000 numbers). Then type '=' to get total;");
  Scanner inAdd = new Scanner(System.in);
  for(int i = 0; i < 1000; i++)
  {   
   System.out.println("Enter another number to compute the sum ");
   String inputAdd = inAdd.next();
   if(inputAdd.equals("="))
   {
    break;
   }
   else
   {
    int value = Integer.parseInt(inputAdd);
    resultSum = resultSum + value;
   }
   
   if(i == 9)    
    break;   
  } 
 }
 
 public void Subtraction()
 {
  Scanner inSub = new Scanner(System.in);   
  System.out.println("Type a number to subtract from");
  String valueOne = inSub.next();
  double value1 = Integer.parseInt(valueOne);

  System.out.println("Type a number to subtract");
  String valueTwo = inSub.next();
  double value2 = Integer.parseInt(valueTwo);
  
  this.resultSub = value1 - value2;
 }
 
 public void Multiplication()
 {
  System.out.println("Enter values to multiply (maximum of 10 numbers). Then type '=' to get result;");
  resultMult = 1;
  Scanner inMult = new Scanner(System.in);
  for(int i = 0; i < 10; i++)
  {   
   System.out.println("Type another number to multiply.");
   String inputMult = inMult.next();
   if(inputMult.equals("="))
   {
    break;
   }
   else
   {
    int value = Integer.parseInt(inputMult);
    resultMult = resultMult * value;
   }
   
   if(i == 9) 
    break;
  }    
 }
 
 public void Division()
 {
  Scanner inDiv = new Scanner(System.in);   
  System.out.println("Type a number to divide from");
  String valueOne = inDiv.next();
  double value1 = Double.parseDouble(valueOne);

  System.out.println("Type a number to divide");
  String valueTwo = inDiv.next();
  double value2 = Double.parseDouble(valueTwo);
  
  this.resultDiv = value1 / value2;     
 }
 
  public void ModDivision()
 {
  Scanner inModDiv = new Scanner(System.in);   
  System.out.println("Type a number to divide from");
  String valueOne = inModDiv.next();
  double value1 = Double.parseDouble(valueOne);

  System.out.println("Type a number to divide");
  String valueTwo = inModDiv.next();
  double value2 = Double.parseDouble(valueTwo);
  
  this.resultModDiv = value1 % value2;     
 }
 
 public void displayResultSum()
 {
  System.out.println("The result is: " + this.resultSum);  
 } 
 
 public void displayResultSub()
 {
  System.out.println("The result is: " + this.resultSub);  
 }
 
 public void displayResultMult()
 {
  System.out.println("The result is: " + this.resultMult);  
 }
 
 public void displayResultDiv()
 {
  System.out.println("The result is: " + this.resultDiv);  
 }
 
 public void displayResultModDiv()
 {
  System.out.println("The result is: " + this.resultModDiv);  
 }
}
