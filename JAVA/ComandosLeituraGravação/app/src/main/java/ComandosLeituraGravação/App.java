package ComandosLeituraGravação;

import java.util.Scanner;

public class App {
    
    public static void main(String[] args) {
        
        Scanner leitor = new Scanner(System.in);
        
        int idade = leitor.nextInt(); // números inteiros
        float cotacaoDolar = leitor.nextFloat(); //Números quebrados com virgula
        double cotacaoEuro = leitor.nextDouble(); //
        String nome = leitor.nextLine(); // ler a linha toda
        String codigoRua = leitor.next(); // ler apenas a primeira palavra
        
        System.out.println("Texto que será exibido no console e dará enter");
        System.out.print("Texto que será exibido no console e ficará na linha");
        
    
    }
}
