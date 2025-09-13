// passa a referencia do metodo e não o valor em si 
// nao é uma cópia é o endereço em que está na memória
// tipo primtivo copia do valor, instancia é referencia de memoria
class Pessoa{
    // #nome; para ser privado
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

let pessoa4 = new Pessoa;
let pessoa5 = new Pessoa;
pessoa4.nome = 'Emilia';
pessoa5.nome = 'Lulu';
pessoa4.dataNasc = '23/07/1999';
pessoa4.cpf = '09812367600';
pessoa5.dataNasc = '24/08/1973';
pessoa5.cpf = '08065412388';

let carro = {pessoa1, pessoa2, pessoa3, pessoa4, pessoa5};
console.log(carro);

// class Onibus{
//     modelo;
//     cor;

//     entrar_passageiros(){
//         let 
//     }
// }




// pessoa2 = pessoa1;
// pessoa1.nome = 'Caio';
// console.log('Pessoa 2 = pessoa 1');
// pessoa2.apresentar();
// assim aparece caio na pessoa 2


// pessoa1.nome = 'Ana';
// pessoa1.apresentar();
// pessoa2.nome = pessoa1.nome;
// pessoa1.nome = 'Caio';
// console.log('Pessoa 2 = pessoa 1');
// pessoa2.apresentar();
// assim fica ana 