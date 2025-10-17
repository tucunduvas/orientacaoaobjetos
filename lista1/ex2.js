
// Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

const prompt = require('prompt-sync')({sigint: true});
const num = prompt('Digite um número: ');


let par = num%2==0 ? 'Par': 'Ímpar';
let positivo = num>=0 ? 'Positivo' : 'Negativo';

console.log(`O número ${num} é ${par} e ${positivo}`);

