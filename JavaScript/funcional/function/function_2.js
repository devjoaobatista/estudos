// arrow function
// Uma forma diferente de usa-lá
const saudacao = nome => `Fala ${nome}, blz?`

console.log(saudacao("João"));

//--------------------------------------------------------

const somar = (...numeros) => {
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

console.log(somar(1, 2, 3, 4, 5, 6, 7));

//---------------------------------------------------------

const potencia = base => exp => Math.pow(base, exp);
console.log(potencia(2)(10));