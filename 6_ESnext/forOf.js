for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ["map", "set", "Promise"]

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assuntos of assuntosEcma) {
    console.log(assuntos)
}

const assuntosMap = new Map([
    ["Map", {abordado: true}],
    ["set", {abordado: true}],
    ["Promise", {abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)    
}

for (let valor of assuntosMap.values()){
    console.log(valor)
}

for(let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}