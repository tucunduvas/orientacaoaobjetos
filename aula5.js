// tipo primivo (string )altera a copia e nao definitivamente na memoria

class Pessoa{
    nome; 
    dataNasc;
    cpf;

    apresentar(){
        console.log(`O meu nome é ${this.nome}`);
    }
}

let pessoa1 = new Pessoa();
pessoa1.nome = 'Ana';
mudarNome(pessoa1);
pessoa1.apresentar();

function mudarNome(individuo){  // em classe passa o valor original, a referencia de memoria 
                               
    individuo.nome = 'sem nome'; 
}
// nesse caso imprime sem nom 


let nomer
nomer = 'Ana';
mudarNome(nomer);
console.log(nomer);

function mudarNome(individuo){ // nesse caso a funcao recebe uma copia pq a variavel ´um tipo primitivo 
                                // em classe passa o valor original 
    individuo = 'sem nome'; 
}

// imprime ana 


// para alterar o valor da variavel primitiva é com return, forçando a alteracao
// assim: 
// nomer = mudarNome(nomer);

// function mudarNome(individuo){     
//     return 'sem nome'; 
// }




// JavaScript possui sete tipos primitivos: 
// String: Para texto.
// Number: Para números inteiros e de ponto flutuante.
// Boolean: Para valores lógicos true ou false.
// Null: Representa intencionalmente a ausência de um valor.
// Undefined: Indica que uma variável não recebeu um valor.
// Symbol: Um valor único e imutável, introduzido no ECMAScript 6.
// BigInt: Para representar números inteiros muito grandes, maiores do que o Number pode manipular.