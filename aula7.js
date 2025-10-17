//JS -> PROTOTYPE
class Cachorro{
    nome
    raca
    idade
    dono

    get dinheiro()
    {
        return this.din;
    }

    set dinheiro( valor)
    {
        this.din = valor;
    }
}

class Papagaio{
    nome
    idade 
}
class Pessoa{
    nome
    #dinheiro
    historico = []

    get dinheiro(){
        return this.#dinheiro
    }

    set dinheiro(valor){
        this.historico.push(this.#dinheiro - valor)
        //calcula a diferença entre o valor anterior e o novo e empurra no historico
        this.#dinheiro = valor
        // dinheiro recebe o novo valor
    }

    constructor(nome, dinheiro){
        this.nome = nome
        this.#dinheiro = dinheiro
        //chamado automaticamente quando cria uma nova instância da classe com new
        //é como o “formulário de nascimento” do objeto.
    }

}

class busao{
    passageiros = []
    #valorPassagem = 10

    embarcarPassageiro(passageiro){
      //  if(Object.hasOwn(passageiro,'dinheiro'))
        if(passageiro.dinheiro > this.#valorPassagem){
            //passageiro.dinheiro é chamada a getter de dinheiro
            this.passageiros.push(passageiro)
            //adiciona o objeto passageiro no array (é a mesma referência do objeto).
            passageiro.dinheiro -= this.#valorPassagem
        }
        //verifica se a pessoa tem dinheiro suficiente e, se tiver, adiciona à lista e desconta a passagem
    }
}
Cachorro.prototype.dinheiro = 100;
let rex = new Cachorro(); 
rex.nome = 'rex';
rex.dinheiro = 15;
// Object.preventExtensions(Cachorro.prototype)
Object.preventExtensions(rex)
let joao = new Pessoa("João", 50)
let maria = new Pessoa("Maria", 9)
let lessie = new Cachorro;
lessie.nome = 'lexie';
lessie.dinheiro = 13;

maria.dinheiro += 20;

// rex.dinheiro = () =>
// {
//     this.din += 1000;
// }

//comprando onibus

const transLagoas = new busao()
transLagoas.embarcarPassageiro(joao);
transLagoas.embarcarPassageiro(maria);
rex.dinheiro =100;
transLagoas.embarcarPassageiro(rex);
transLagoas.embarcarPassageiro(lessie);
transLagoas.embarcarPassageiro(Papagaio)
console.log(transLagoas.passageiros)

let transSP = new busao()
transSP.embarcarPassageiro(joao)
transSP.embarcarPassageiro(joao)
console.log("TransSP passageiros")
console.log(transSP.passageiros)

console.log(joao.historico)

maria.historico.push(1000)
console.log(maria.historico)
console.log(maria.dinheiro)

console.log("João tem dinheiro?"+joao.hasOwnPropperty('dinheiro'))

