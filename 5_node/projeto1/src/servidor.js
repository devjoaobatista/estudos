const porta = 3003

const express = require("express")
const app = express()
const bancoDeDados = require("./bancoDeDados")

app.get("/produtos", (req, resp, next) => {
    resp.send(bancoDeDados.getProdutos()) // Converte para JSON
})

app.get("/produtos/:id", (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post("/proodutos", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res,send(produto) // Vai transformar em json
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})