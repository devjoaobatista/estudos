import express, { query } from 'express';
const app = express();
app.use(express.json());

const users = [
    {nome: "Joao", mail: "joao@js.com", fone: 9999999, endereco: "rua 2"},
    {nome: "Pedro", mail: "pedro@js.com", fone: 77777777, endereco: "rua 1"}
];

// Esse get retorna todos os usuários.
app.get("/server", (request, response) => {
    const usersWithIndex = users.map((user, id) => {
        const objectTransformed = { id, ...user }
        return  objectTransformed;
    });    
    return response.send(usersWithIndex);
});

// Esse get retorna apenas um usuário através do ID repassado.
app.get("/server/:id", (request, response) => {
    const { id } = request.params;
    
    if(id > users.length) {
        return response.send("Esse ID não existe!");
    }
    else {
        return response.send(users[id]);
    }
});

// Esse post cria um novo usuário
app.post("/server", (request, response) => {
    let newUser = request.body;
    users.push(newUser);

    return response.status(201).send("Usuário criado!");
});

// Esse put atualiza um usuário da ID repassada.
app.put("/server/:id", (request, response) => {
    const { id } = request.params;
    const updateUser = request.body;
    
    if(id > users.length) {
        return response.send("Esse ID não existe");
    }
    else {
        users[id] = updateUser
        return response.send("Usuário atualizado!");
    }
// Apesar do valor recebido no request.params ser string, o javascript reconhece como número de indice e no uso de comparadores.
});

// Esse delete apaga o usuário da ID repassada.
app.delete("/server/:id", (request, response) => {
    const { id } = request.params;
    
    if(id > users.length) {
        return response.send("Esse ID não existe!");
    }
    else {
        users.splice(id, 1);
        return response.send("Usuário deletado!");
    }
});


app.listen(3000, () => { return console.log ("Servidor rodando"); });