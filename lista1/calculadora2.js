const prompt = require('prompt-sync')({sigint: true});
let funcMult = multiplicar;


let a = parseInt(prompt('Digite o primeiro valor: '));
let b = parseInt(prompt('Digite o segundo valor: '));
let operacao = prompt('Digite a operação: ');

let dicOperacoes = new Map();
dicOperacoes.set("+", function(a,b){return parseFloat(a)+ parseFloat(b)})
dicOperacoes.set("-", subtrair);
dicOperacoes.set("*", funcMult);


console.log(dicOperacoes.get(operacao)(a,b));

function subtrair(a,b){
    return a-b;
}
function multiplicar(a,b){
    return a*b;
}



//////////////


