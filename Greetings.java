package greetings;
public class Greetings {
    public static void main(String[] args) {
        
        int time = 20;
        
        if (time < 10){
            System.out.println("Good Morning!");
        }
        
        else if (time < 18){
            System.out.println("Good Afternoon!");
        
        }
        else {
            System.out.println("Good Night");
        }
    }
}
