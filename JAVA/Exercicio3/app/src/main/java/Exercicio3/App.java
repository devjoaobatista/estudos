
package Exercicio3;

/**
 * 
 * @author joao Batista
 */


import java.util.Scanner;

public class App {

    public static void main(String[] args) {
        int anoFabricacao = 0;
        float valorDoCarro = 0.0f;
        float desconto = 0.0f;
        float valorDoDesconto = 0.0f;
        
        
        Scanner leitor = new Scanner(System.in);
        
        char desejaRepetir = 's';
        
        while (desejaRepetir == 's' || desejaRepetir == 'S') {
            System.out.println("Digite o Ano de fabricação");
            anoFabricacao = leitor.nextInt();
            
            System.out.println("Digite o valor do carro");
            valorDoCarro = leitor.nextInt();
            
            if (anoFabricacao <= 2000) {
                desconto = 0.12f;
            } else {
                desconto = 0.07f;
            }
            
            valorDoDesconto = valorDoCarro * desconto;
            
            System.out.println("O valor do desconto  é: " + valorDoDesconto);
            
            
            System.out.println("Deseja fazer mais cadastros? S - Sim / N - Não");
            desejaRepetir = leitor.next().charAt(0);
              
        }
        
    }           
}
