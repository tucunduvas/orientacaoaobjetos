console.log('testando pelo vs');

// Tipos primitivos => passagem de parêmtros por valor

let contador = 0;
contador = atribuir(contador);
contador = atribuir(contador);
contador = atribuir(contador);
console.log(contador);

function atribuir(num){
    // num++ depois de executar a instrucao
    //++num incrementa uma unidade antes da execucao da  linha (instrucao)
    //num +=1;
    //num = num + 1;
    num++; 
    console.log("num: "+num);
    return num;
}

//isso acontece porque a variavel num é numerico passa por valor e não por referência
// o parametro passa contador como cópia


///////////////////////////////////////////////////////////////

var contador2 = 0

atribuir()
atribuir()
atribuir()
console.log(contador)

// jeito errado, pq nao da pra reaproveitar com outras variaveis 
function atribuir(){
    contador2++; 
    return contador2;
}

