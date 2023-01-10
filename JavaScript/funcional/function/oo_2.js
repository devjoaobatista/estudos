class Produto {

    constructor(nome, preco, desc = 0.5) {
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }
    // Adicionar o Get antes da função faz ela se transformar
    // em um atributo, logo não posso chama-la como função
    get precoFinal() {
        return this.preco * (1 - this.desc)
    }
}



const p1 = new Produto("Caneta", 8.50)
console.log(p1.nome)

const p2 = new Produto("geladeira", 10000, 0.8)
console.log(p2.preco)
console.log(p2.precoFinal)