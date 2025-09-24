class Pessoa{
 
    nome; 
    dataNasc;
    cpf;
    constructor(){

    }
    apresentar(){
        console.log(`O meu nome é ${this.nome}`);
    }
}


class Funcionario extends Pessoa{
    funcao;
    matricula;

    constructor(){
        super()
        this.nome = 'aaa';
        
    }
    //sobre escrita
    apresentar(){
        super.apresentar();
        console.log(`Minha função é ${this.funcao} e minha matricula é ${this.matricula}`);
    }
}

let empacotador = new Funcionario;
empacotador.nome = 'Jose Silva';
empacotador.cpf = '09812367855';
empacotador.dataNasc = '09/1/2004';
empacotador.matricula = '123';
empacotador.funcao = 'Assistente'; 

empacotador.apresentar();




// oque sobrecarga (mais de um metodo com a mesma nomeclatura)
// 