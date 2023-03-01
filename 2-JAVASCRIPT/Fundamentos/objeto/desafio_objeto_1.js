//Criar um objeto com o dia mês e Ano

const data = {
    dia: 10, 
    mes: 10,
    ano: 2010,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(data.exibir());