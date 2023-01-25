const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const saudacao = require("./saudacaoMid")
const usuarioApi = require("./api/usuario")
require("./api/produto")(app, "com param!")


app.post("/usuario", usuarioApi.salvar)
app.get("/usuario", usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao("Joao"))

app.use( (req, res, next) => {
    console.log("Será que serei chamado?")
    next()
})

app.get("/index", (req, res) =>{

//    é comum trabalhar com express usando json
    res.json({
        name: "ipad",
        price: 1899.00,
        disccount: 0.12
    })
//    res.send("resposta")
})

app.get("/index/relatorio", (req, res) =>{
    res.send(`cliente relatório: completo = ${req.query.completo}, ano = ${req.query.ano}!`)
})

app.post("/index/corpo", (req, res) =>{
    /*
    let corpo = ""
    req.on("data", function(parte){
        corpo += parte
    })
    req.on("end", function() {
        res.send(corpo)
    })
    */
   res.send(req.body.nome)
})

app.get("/index/:id", (req, res) =>{
    res.send(`cliente ${req.params.id} selecionado!`)
})

app.listen(3000, () => {console.log("Servidor ativo na porta 3000")})