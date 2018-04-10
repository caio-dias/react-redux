//instanciando a classe, definindo attrs e metodo de exibição dos attrs
//exportando toda a classe por padrao, quando ela for importada em algum arquivo
export default class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    toString() {
        return `Pessoa: ${this.nome}, Idade: ${this.idade}`
    }
}