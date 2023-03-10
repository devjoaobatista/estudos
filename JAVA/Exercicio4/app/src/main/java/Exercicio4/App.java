
package Exercicio4;

public class App {
    public static void main(String[] args) {
        Invoice inv = new Invoice(1, "Mousepad", 10, 200.0f);
        System.out.println("O valor total é " + inv.getInvoiceAmount());
    
    }

}