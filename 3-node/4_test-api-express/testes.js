// testes de retorno do indice como id
/*
const users = [
    {nome: "Joao", mail: "joao@js.com", fone: 9999999, endereco: "rua 2"},
    {nome: "Pedro", mail: "pedro@js.com", fone: 77777777, endereco: "rua 1"}
];



//const usersWithIndex = users.map((user, id ) => ({
//    id, ...user
//  }));

// console.log(usersWithIndex);


const usersWithIndex = users.map((user, id ) => {
    const objetoFinal = { id, ...user }
    console.log(objetoFinal);
   // return objetoFinal
});


const users = [
    {nome: "Joao", mail: "joao@js.com", fone: 9999999, endereco: "rua 2"},
    {nome: "Pedro", mail: "pedro@js.com", fone: 77777777, endereco: "rua 1"}
];

const users2 = users.map((user, i) => {
    const obj = { id: i ,...user };
    return obj;
});

console.log(users2);

*/
// Testes da rota Put
/*
const users = [
    {nome: "Joao", mail: "joao@js.com", fone: 9999999, endereco: "rua 2"},
    {nome: "Pedro", mail: "pedro@js.com", fone: 77777777, endereco: "rua 1"}
];

const userUpdate =  {nome: "Maria", mail: "joao@js.com", fone: 9999999, endereco: "rua 2"};
const id = "1";

if(id > users.length) {
    console.log("Esse ID não existe")
}
else {
    users[id] = userUpdate;
    console.log(users);
}

console.log(userUpdate, id)
*/
// testes da rota delete
/*
const users = [
    {nome: "Joao", mail: "joao@js.com", fone: 9999999, endereco: "rua 2"},
    {nome: "Pedro", mail: "pedro@js.com", fone: 77777777, endereco: "rua 1"}
];
const id = "1";

users.splice(0, 1);

console.log(users)
*/