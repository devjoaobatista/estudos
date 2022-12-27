const users = [
    {nome: "Joao", mail: "joao@js.com", fone: 9999999, endereco: "rua 2"},
    {nome: "Pedro", mail: "pedro@js.com", fone: 77777777, endereco: "rua 1"}
];



//const usersWithIndex = users.map((user, id ) => ({
//    id, ...user
//  }));

// console.log(usersWithIndex);


const usersWithIndex = users.map((user, id ) => {
    const objetoFinal = {
      id, ...user
    }
    console.log(user, id, objetoFinal);
    return objetoFinal
});
