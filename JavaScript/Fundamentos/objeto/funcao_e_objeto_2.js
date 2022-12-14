//simplificando alguns detalhes
function criarData(dia, mes, ano) {
    return {
        dia, 
        mes,
        ano,
        exibir() { // <= uma forma de simplificar funções
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    };
}

const d1 = criarData(9,10,2010);
const d2 = criarData(22,11,2023);
const d3 = criarData(3,4,2012);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());