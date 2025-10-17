


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

    dinheiro_dono(dono){
    if(Object.hasOwn(Object.getPrototypeOf(dono), 'dinheiro')){
        if(dono.dinheiro > valor){
        }
    }
    }
}

verifica se o dono tem dinheiro, se tiver dinheiro funcao para pagar a passagem 



let lessie = new cachorro();
lessie.nome = 'Lessie';
lessie.dinheiro = 13;

let joao = new pessoa('Joao', 50);
let maria = new pessoa('Maria', 9);
maria.dinheiro += 20;

console.log('Joao tem dinheiro? ' + Object.hasOwn(Object.getPrototypeOf(joao), 'dinheiro'));

// comprando um busao
const transLagoas = new busao();

transLagoas.embarcarPassageiro(lessie);
transLagoas.embarcarPassageiro(joao);


console.log('Passageiros transLagoas:');
console.log(transLagoas.passageiros);
