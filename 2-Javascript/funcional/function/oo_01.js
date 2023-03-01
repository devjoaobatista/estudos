//função construtora

function Produto(nome, preco, desconto = 0.50 ) {
    this.nome = nome
    this.preco = preco
    this.desconto = desconto

    this.precoFinal = function() {
        return this.preco * (1-this.desconto)
    }
}

const p1 = new Produto("Caneta", 8.50)
console.log(p1.nome)

const p2 = new Produto("geladeira", 2345.98)
console.log(p2.preco)
console.log(p2.precoFinal())