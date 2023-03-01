// o module.exports sempre aponta para o mesmo objeto
// Mesmo que a gente tenha mudado a referência do que ele recebe
// Se eu for querer atribuir um novo objeto, devo usar para receber o module.exports

console.log(module.exports === this )
console.log(module.exports === exports )

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null

console.log(module.exports)

exports = {
    nome: "teste"
}

//module.exports é o que é enviado do arquivo
console.log(module.exports)
