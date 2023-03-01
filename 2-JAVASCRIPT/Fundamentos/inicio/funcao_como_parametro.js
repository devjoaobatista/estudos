 function executar (funcao){
    if(typeof funcao === "function") {
        console.log(funcao());
    }
 } 


function BomDia() {
    return "Bom dia";
}

executar(3);

// Se a função for transferida como os parenteses
// o Resultado da função foi passado para dentro
// coloque sem as aspas conforme o exemplo
executar(BomDia);