const cliente = {
    nome: "ana",
    codigo: 16532,
    vip: true,
    endereco: {
        logradouro: "Rua ABC",
        numero: 123,
        complemento: "Apto 101 Bloco B",
        pontosRef: [
            "Hospital x",
            "Shopping y",
        ]
    },
    nomeFilhos: ["Bia", "Carlos", "Gabriel"],
};

console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef)