const passo1 = (contexto, next) => {
    contexto.valor1 = "mid1"
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = "mid2"
    next()
}

const passo3 = contexto => contexto.valor3 = "mid3"

const exec = (contexto, ...middlewares) => {
    const executarPassos = indice => {
        middlewares && indice < middlewares.length &&
                middlewares[indice](contexto, () => executarPassos(indice + 1))
    }
    executarPassos(0)
}

const contexto = {}

exec(contexto, passo1, passo2, passo3)
console.log(contexto)