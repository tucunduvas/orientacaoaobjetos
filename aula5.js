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
    individuo.nome = 'sem nome'; 
}

// imprime ana 


