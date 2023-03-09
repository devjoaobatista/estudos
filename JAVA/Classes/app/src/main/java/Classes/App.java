package Classes;

import java.util.Scanner;

public class App {
  
   
    public static void main(String[] args) {
        
        Pessoa objetoPessoa = new Pessoa(0.0f, 0.0f);
    
        Scanner leitor = new Scanner(System.in);
        
        
        System.out.println("Digite o peso da pessoa");
        objetoPessoa.setPeso(leitor.nextFloat());
        
        System.out.println(" digite a altura da pessoa");
        objetoPessoa.setAltura(leitor.nextFloat());
        
        System.out.println("IMC = " + objetoPessoa.calcularImc());
        
    
    }
}
