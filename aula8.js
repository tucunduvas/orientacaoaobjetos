// // JS -> Prototype
// class Funcionario extends Pessoa{
//     funcao;
//     matricula;

//     constructor(){
//         super()
//         this.nome = 'aaa';
        
//     }
//     //sobre escrita
//     apresentar(){
//         super.apresentar();
//         console.log(`Minha função é ${this.funcao} e minha matricula é ${this.matricula}`);
//     }
// }

// class Zoonozes extends cachorro{
//     tiposanguineo;
//     doenças = [];
//     vacinas = [];
//     especie;
//     remedios = [];
// }





class pessoa {
  nome;
  #din;
  historico = [];

  get dinheiro() {
    return this.#din;
  }

  set dinheiro(valor) {
    this.historico.push(valor - this.#din);
    this.#din = valor;
  }

  constructor(nome, dinheiro) {
    this.nome = nome;
    this.#din = dinheiro;
  }
}

//propriedade é do prototipo 
//

class busao {
  passageiros = [];
  valorPassagem = 10;

  embarcarPassageiro(passageiro) {
    console.log(
      passageiro.nome +
        ' Passageiro tem dinheiro: ' +
        Object.hasOwn(Object.getPrototypeOf(passageiro), 'dinheiro')
    );

    if (Object.hasOwn(Object.getPrototypeOf(passageiro), 'dinheiro')) {
      if (passageiro.dinheiro > this.valorPassagem) {
        this.passageiros.push(passageiro);
        passageiro.dinheiro -= this.valorPassagem;
      }
    }
  }
}

class cachorro {
  nome;
  raca;
  idade;
  dono;
  din = 0;

  get dinheiro() {
    return this.din;
  }

  set dinheiro(valor) {
    this.din = valor;
  }

}


// Corrigido: define a propriedade interna, não o getter/setter
cachorro.prototype.din = 100;

// Impede novas adições no prototype depois da configuração
Object.preventExtensions(cachorro.prototype);

let rex = new cachorro();
rex.nome = 'Rex';
rex.dinheiro = 15;
// rex.correnteOuro = '2 kilates'
// Object.freeze(rex)

console.log(rex.dinheiro);

let lessie = new cachorro();
lessie.nome = 'Lessie';
lessie.dinheiro = 13;

let joao = new pessoa('Joao', 50);
let maria = new pessoa('Maria', 9);
maria.dinheiro += 20;

console.log('Joao tem dinheiro? ' + Object.hasOwn(Object.getPrototypeOf(joao), 'dinheiro'));

// comprando um busao
const transLagoas = new busao();

// rex.dinheiro = 100;
transLagoas.embarcarPassageiro(rex);
transLagoas.embarcarPassageiro(lessie);
transLagoas.embarcarPassageiro(joao);
transLagoas.embarcarPassageiro(maria);

console.log('Passageiros transLagoas:');
console.log(transLagoas.passageiros);

let transSP = new busao();
transSP.valorPassagem = 15;
transSP.embarcarPassageiro(joao);
transSP.embarcarPassageiro(joao);

console.log('Passageiros transSP:');
console.log(transSP.passageiros);

console.log('Passageiros transLagoas novamente:');
console.log(transLagoas.passageiros);

joao.dinheiro -= 2;
console.log(joao.historico);

console.log(maria.historico);
console.log(maria.dinheiro);

maria.historico.push(1000); // após 1000 para a Maria
console.log(maria.historico);
console.log(maria.dinheiro);

// Autor: Thiago de Oliveira Correia
// Professor EBTT Informática/Desenvolvimento e Jogos Digitais
// Instituto Federal de Mato Grosso do Sul - IFMS Três Lagoas - MS

//descontar o dinheiro do dono 
//criar um orgao para regularizar os cachorros
