function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}
// o resolve passa apenas um parêmetro.
// Para passar mais de um elemento é possível através de um objeto
falarDepoisDe(3, "que legal!")
    .then(frase => frase.concat("?!?"))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // Formar de tratar o erro de uma promise