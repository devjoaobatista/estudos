function menorNota (nota1, nota2){
    return nota1 <= nota2 ? nota1 : nota2;
}

function media (nota1, nota2, nota3){
    const menorNota2 = menorNota(nota1, menorNota(nota2, nota3))
    if (menorNota2 === nota1) {
        return (nota2 + nota3) / 2;
    } else if (menorNota2 === nota2) {
        return (nota1 + nota3) / 2;
    } else {
        return (nota1 + nota2) / 2;
    }
}


const nota1 = 7.8
const nota2 = 3.1
const nota3 = 6.7

console.log(media(nota1, nota2, nota3));