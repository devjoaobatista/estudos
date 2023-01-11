function notaDeAluno (nota) {
    if (nota > 10) {
        console.log("A maior nota possível é 10")
    } else {
        switch(Math.ceil(nota)) {
            case 10: nota = "A+"; break;
            case 9: nota = "A"; break;
            case 8: nota = "B+"; break;
            case 7: nota = "B"; break;
            case 6: nota = "C+"; break;
            case 5: nota = "C"; break;
            case 4: nota = "D+"; break;
            case 3: nota = "D"; break;
            case 2: nota = "E"; break;
            case 1: nota = "F"; break;
            default: console.log("O que você fez para chegar aqui?")
        }
    }

    return nota
}

let nota = 11.1

console.log(`O aluno recebeu a nota ${notaDeAluno(nota)}`)