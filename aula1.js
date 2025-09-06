console.log("Oi mundo");

var num1 = 'oi';
let num2 = 3;
// var é uma variável global
// se declarar dentro do if o let fica uma variável local
// const constante trava os valores do tipo primitivo
var num = 0;
const num3 = 1;
let num4 = '1';

if (num3 == num4){
    console.log('SÃO IGUAIS');
    var saudacoes = 'olaaaa';
    num = 1;                            
}else{
    console.log('são diferentes'); 
}

console.log(typeof num);

function somar(a,b){
    return a+b;
}

let resultado = somar(2,3);
console.log(somar(2,3));

switch (num2){
    case 1:
        console.log('o numero é 1');
    case 2:
        console.log('o número é 2');

    case 3:
        console.log('o número é 3');
    break;
}