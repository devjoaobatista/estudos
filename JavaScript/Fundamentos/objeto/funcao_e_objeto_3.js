// função construtora (Classe) -> Objeto
function Data(dia = 1, mes = 1, ano = 2021) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
}

const d1 = new Data();
const d2 = new Data(24, 12, 2021);
const d3 = new Data(13, 12, 2021);


console.log(d1);
console.log(d2);
console.log(d3);
console.log(Data);
