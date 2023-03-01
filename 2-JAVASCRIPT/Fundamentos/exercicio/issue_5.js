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

// Outra forma de fazer
function maiorOuIgual2 (numero1, numero2){
    if (typeof numero1 != typeof numero2) {
        return false
    }
    else {
    return numero1 >= numero2
    }
};



console.log(maiorOuIgual2(1, "15"));
