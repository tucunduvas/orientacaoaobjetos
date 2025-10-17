
// Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.500,00).

const salario_minimo = 1500
const prompt = require('prompt-sync')({sigint: true});
const salario = prompt('Digite um número: ');

let qnt_salario = salario / salario_minimo;
console.log(qnt_salario);