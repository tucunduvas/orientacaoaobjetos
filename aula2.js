console.log(' ');
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

atribuir2();
atribuir2();
atribuir2();
console.log(contador2);

// jeito errado, pq nao da pra reaproveitar com outras variaveis 
function atribuir2(){
    contador2++; 
    return contador2;
}

////////////////////////////////////////////

let numero = 10;
console.log(numero++);
console.log(numero);

let numero2 = 10;
console.log(++numero2);
console.log(numero2);

///////////////////////////////////////////

for (i = 0; i<=10; i++){
    console.log(i);
}

//////////////////////////////////////////

let cont = 1

while(cont < 11){
    console.log('contador '+cont++);
    // ou cont++ aqui
}

console.log("4"-1);

let numeros = [3,2,1,3,4];

for (n in numeros){
    console.log(n);
} // com o in ele conta a quantidade de coisas dentro da lista


for (n of numeros){
    console.log(n);
} // com o of ele imprime os itens da lista 

numeros.forEach((num, indice) => { 
    console.log(`Indice`)
})// 
