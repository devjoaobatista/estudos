const porta = 3003

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const bancoDeDados = require("./bancoDeDados")

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/produtos", (req, resp, next) => {
    resp.send(bancoDeDados.getProdutos()) // Converte para JSON
})

app.get("/produtos/:id", (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post("/produtos", (req, res, next) => {
    console.log(req.body)
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Vai transformar em json
})

app.put("/produtos/:id", (req, res, next) => {
    console.log(req.body)
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Vai transformar em json
})

app.delete("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.deleteProduto(req.params.id)
    res.send(produto) 
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})