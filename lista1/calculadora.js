// Faça uma calculadora que tenha as possibilidades de operação: somar, subtrair, multiplicar e dividir.
const prompt = require('prompt-sync')({sigint: true});
const num1 = prompt('Digite um número: ');
const num2 = prompt('Digite outro número: ');

console.log('1 - soma');
console.log('2 - subtração');
console.log('3 - multiplicação');
console.log('4 - divisão');
opcao = ler_opcao(4);

let opcoes = {
    'soma': soma,
    'subtracao': subtracao,
    'multiplicao': multiplicacao,
    'divisao': divisao
};

// console.log(dictionary['key1']);
//const prompt = require('prompt-sync')({sigint: true});
if (opcoes[opcao]){
    opcoes[opcao](); 
}

function ler_opcao(qntd){
    while (true){
        try{
            let opcao = prompt('Escolha uma opção: ');
            if (0<=opcao <=qntd){
                return opcao
            }
        }catch{
            console.log('Opção Inválida!');
        }
    }
}

function soma(num1, num2){
    return console.log('O resultado é: ', parseFloat(num1)+parseFloat(num2));
}

function subtracao(num1,num2){
    return console.log('O resultado é: ', parseFloat(num1)-parseFloat(num2));
}

function multiplicacao(num1, num2){
    return console.log('O resultado é: ', parseFloat(num1)*parseFloat(num2));
}

function divisao(num1,num2){
    return console.log('O resultado é: ', parseFloat(num1)*parseFloat(num2)); 
}