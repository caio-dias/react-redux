//os navegadores ainda nao suportam importacoes de classe
//para fazer isso, precisamos de um transpilador de codigo, o Babel
//ele vai transformar o codigo que esta em es6, para uma versao anterior que o navegador entenda
//utilizando o padrao do es6
import Pessoa from './pessoa'

//instanciando var e add attrs
const pessoa = new Pessoa('Caio', '24')
//exibindo saida do metodo da classe
console.log(pessoa.toString())