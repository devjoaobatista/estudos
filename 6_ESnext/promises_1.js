let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa){ 
    cumprirPromessa(3)
})

p.then(function(valor) {
    console.log(valor)
})

// Básico de promises, ela recebe unma função como parâmetro
// Passa um objeto que é chamado pelo metodo then.
// O metodo then vai receber uma função que vai informar como os dados
//serão tratados