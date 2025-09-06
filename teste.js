
var contador = 0

contador = atribuir(contador)
contador = atribuir(contador)
contador = atribuir(contador)
console.log(contador)

// jeito errado, pq nao da pra reaproveitar com outras variaveis 
function atribuir(num){
    num++; 
    return num++;
}

