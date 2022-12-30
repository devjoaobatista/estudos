import express from 'express';

const app = express();
app.use(express.json());

const users = [
  {
    nome: 'Joao', mail: 'joao@js.com', fone: 9999999, endereco: 'rua 2',
  },
  {
    nome: 'Pedro', mail: 'pedro@js.com', fone: 77777777, endereco: 'rua 1',
  },
];

// Esse get retorna todos os usuários.
app.get('/server', (request, response) => {
  const usersWithIndex = users.map((user, id) => {
    const objectTransformed = { id, ...user };
    return objectTransformed;
  });
  return response.send(usersWithIndex);
});

// Esse get retorna apenas um usuário através do ID repassado.
app.get('/server/:id', (request, response) => {
  const { id } = request.params;

  if (id > users.length) {
    return response.status(404).send('Esse ID não existe!');
  }

  return response.send(users[id]);
});

// Esse post cria um novo usuário
app.post('/server', (request, response) => {
  const newUser = request.body;
  users.push(newUser);

  return response.status(201).send('Usuário criado!');
});

// Esse put atualiza um usuário da ID repassada.
app.put('/server/:id', (request, response) => {
  const { id } = request.params;
  const updateUser = request.body;

  if (id > users.length) {
    return response.status(404).send('Esse ID não existe');
  }

  users[id] = updateUser;
  return response.send('Usuário atualizado!');
});

// Esse delete apaga o usuário da ID repassada.
app.delete('/server/:id', (request, response) => {
  const { id } = request.params;

  if (id > users.length) {
    return response.status(404).send('Esse ID não existe!');
  }

  users.splice(id, 1);
  return response.send('Usuário deletado!');
});

app.listen(3000, () => console.log('Servidor rodando'));
