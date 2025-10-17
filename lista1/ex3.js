
// Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, caso contrário deverá multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela.


const prompt = require('prompt-sync')({sigint: true});
const num = prompt('Digite um número: ');
const num2 = prompt('Digite um número: ');

if (num == num2){
    let soma = parseFloat(num)+parseFloat(num2);
    console.log(`Resultado: ${soma}`);
}else{
    let mult = parseFloat(num)*parseFloat(num2);
    console.log(`Resultado: ${mult}`);
}
