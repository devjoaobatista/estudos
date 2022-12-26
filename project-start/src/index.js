import express from 'express';
const app = express();
app.use(express.json());

const users = [
    {nome: "Joao", mail: "joao@js.com", fone: 9999999, endereco: "rua 2"},
    {nome: "Pedro", mail: "pedro@js.com", fone: 77777777, endereco: "rua 1"}
]

app.get("/server", (require, response) => {
    return response.send(users);
});


app.post("/server", (require, response) => {
    let newuser = require.body
    users.push(newuser);
    console.log(users);
    return response.send("Usuário criado");
});


app.put("/server", (require, response) => {
    return response.send("Usuário atualizado");
});


app.delete("/server", (require, response) => {
    return response.send("Usuário deletado");
});


app.listen(3000, () => { return console.log ("Servidor rodando"); });