// passa a referencia do metodo e não o valor em si 
// nao é uma cópia é o endereço em que está na memória
// tipo primtivo copia do valor, instancia é referencia de memoria
class Pessoa{
    nome;
    dataNasc;
    cpf;

    apresentar(){
        console.log(`O meu nome é ${this.nome}`);
    }
}

let pessoa1 = new Pessoa();
//let pessoa1; poderia ser assim tambein
//new Pessoa();

pessoa1.nome = 'Ana';
pessoa1.apresentar();

let pessoa2 = new Pessoa();

pessoa2.nome = 'Bia';
pessoa2.apresentar();

pessoa2 = pessoa1;
pessoa1.nome = 'Caio';
console.log('Pessoa 2 = pessoa 1');
pessoa2.apresentar();

let pessoa3 = pessoa1;
console.log('Pessoa 3 apresentação: ')
pessoa3.apresentar();

let x = 5;
let y = 2;
y = x;
x = 10;

pessoa2 = pessoa1;

pessoa2.apresentar();