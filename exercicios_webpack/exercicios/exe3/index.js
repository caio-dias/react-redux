const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

//usando o operador spread (...), ele retorna um novo objeto mudando os atributos passados no novo objeto
function clone(objeto) {
    return { ...objeto }
}

//criando um novo produto, clonando os atributos do produto default
const novoProduto = clone(produto)
//mudando o nome do novo produto
novoProduto.nome = 'Caneta Bic Azul'
console.log(produto,novoProduto)