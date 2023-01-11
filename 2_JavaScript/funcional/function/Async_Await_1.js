function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Executando promisse...")
            resolve()
        }, tempo)
    })
}

// esperarPor(2000)
// .then(() => console.log("executando promise 1"))
// .then(esperarPor)
// .then(() => console.log("executando promise 2"))
// .then(esperarPor)
// .then(() => console.log("executando promise 3"))


function retornaValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor = await retornaValor()
    await es
}
