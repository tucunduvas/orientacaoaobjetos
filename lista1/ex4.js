
// Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.


const prompt = require('prompt-sync')({sigint: true});
const num = prompt('Digite um número: ');

console.log(` Número: ${num} Antecessor: `, parseFloat(num)-1, 'Sucessor: ', parseFloat(num)+1);
