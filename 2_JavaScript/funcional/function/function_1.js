//Exemplo básico de como colocar uma função dentro de outra
function calcular(numero1){
    return (numero2) => {
        return (fn) => {
            return fn(numero1, numero2)
        };
    };
};

function sub(numero1, numero2) {
    return numero1 - numero2
};

function multi(numero1, numero2) {
    return numero1 * numero2
};

console.log(calcular(10)(5)(sub));
console.log(calcular(10)(5)(multi));