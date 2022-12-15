// Crie uma função que recebe um número 
// (de 1 a 12 e retorne o mês correspondente como uma  string. Por
// exemplo, se a entrada for 2, a função 
// deverá retornar "fevereiro", pois este é o 2° mês.
    
function numeroParaMes(numero) {
    if (numero > 12) {
    return console.log("Não existe mês acima de 12")
    }
    else {
        switch (numero) {
            case 12: numero = "Dezembro"; break;
            case 11: numero = "Novembro"; break;
            case 10: numero = "Outubro"; break;
            case 9: numero = "Setembro"; break;
            case 8: numero = "Agosto"; break;
            case 7: numero = "Julho"; break;
            case 6: numero = "Junho"; break;
            case 5: numero = "Maio"; break;
            case 4: numero = "Abril"; break;
            case 3: numero = "Março"; break;
            case 2: numero = "Fevereiro"; break;
            case 1: numero = "Janeiro"; break;
            
        }
        return numero
    }
};

console.log(numeroParaMes(8));



// Aprendi a fazer dessa forma acima, mas a forma 
// que eu vou fazer abaixo eu acho mais simples.

function numeroParaMes2 (numero) {
    const mes = ["Janeito", "fevereiro", "março", "Abril", "Junho",
"Agosto", "Setembro", "outubro", "novembro", "Dezembro"]
    return mes[--numero]
};

console.log(numeroParaMes2(2))