// não aceita repetição/ não indexada
const times = new Set()
times.add("vasco")
times.add("São Paulo").add("Palmeiras").add("corinthias")
times.add("Flamengo")
times.add("vasco")

console.log(times)
console.log(times.size)
console.log(times.has("vasco"))
console.log(times.has("Vasco"))
times.delete("Flamengo")
console.log(times.has("Flamengo"))

const nomes = ["Raquel", "Lucas", "Julia", "Lucas"]
const nomesSet = new Set(nomes)
console.log(nomesSet)