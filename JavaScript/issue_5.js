//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. 


function maiorOuIgual (numero1, numero2) {
    if (numero1 < numero2) {
        return true
    }
    else {
        if (numero1 === numero2) {
            return true
        }
        else {
            return false
        }
    }
};

console.log(maiorOuIgual(1, "1"));