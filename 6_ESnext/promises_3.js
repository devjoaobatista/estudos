function GerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min // formula para passar número aleatório xD
        resolve(aleatorio)
    })
}

GerarNumerosEntre(10, 30).then(console.log)

// Se você está aprendendo e ta com dificuldade no promise, quando você 
// aprender, esse then vai ser teu melhor amigo. xD