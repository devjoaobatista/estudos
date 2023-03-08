package Exercicio2;

import java.util.Scanner;

public class App {
  
    public static void main(String[] args) {
        
        Scanner read = new Scanner(System.in);
        
        char desejaContinuar = 's';
        
        while(desejaContinuar == 's' || desejaContinuar == 'S') {
           
            System.out.println("Digite um número");
            
            int numero = read.nextInt();
            
            if(numero == 0) {
                System.out.println("O número  é zero");
            }else{
                if (numero > 0) {
                System.out.println("O número  é maior que zero");
                } else{
                System.out.println("O número  é menor que zero");
                }
            }
            
            System.out.println("Deseja continuar?");

            desejaContinuar = read.next().charAt(0);
        }
        
    }
}
