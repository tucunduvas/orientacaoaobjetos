const prompt = require('prompt-sync')({sigint: true});
const numA = prompt('Digite um número: ');
const numB = prompt('Digite outro número para somar: ');

console.log(parseInt(numA)+ parseInt(numB) );