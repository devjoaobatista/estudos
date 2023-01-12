const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === "china"
const mulheres = f => g.genero === "F"
const menorSalario = (func, funcAtual) => {
   return func.salario < funcAtual.salario ? func : funcAtual
}



axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log(func)
})

//Como achar a mulher chinesa com o menor salário?