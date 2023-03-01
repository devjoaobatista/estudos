function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Executando promise...")
            resolve()
        }, tempo)
    })

}

// esperarPor(2000)
//     .then(esperarPor)
//     .then(esperarPor)


async function executar() {
    await esperarPor(2000)
    console.log("Async/Await 1...")
    await esperarPor(2000)
    console.log("Async/Await 2...")
    await esperarPor(2000)
    console.log("Async/Await 3...")
}

executar()

// Se não tiver o await, ele vai imprimir primeiro o console.log