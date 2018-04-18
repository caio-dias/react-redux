import React from 'react'
import axios from 'axios'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList';

//url da api
const URL = 'http://localhost:3003/api/todos'

export default class Todo extends React.Component {
    constructor(props) {
        super(props)
        //estado inicial do componente
        this.state = {description: '', list: []}
        //amarrando o this, explicitando que ele pertence a classe que o construtor foi criado
        //assim o this tera a referencia certa
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        //chama o metodo refresh para atualizar a lista de tarefas
        this.refresh()
    }

    //pega a lista mais atualizada
    refresh() {
        //pegando os resultados do ultimo para o primeiro
        axios.get(`${URL}?sort=-createdAt`)
            //quando o get for realizado, a promisse segue, seta-se o estado vindo no get
            //pega o estado atual, clona ele com o ..., e joga na lista, deixa a description vazia para que possa adicionar outra tarefa
            .then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }

    //recebe o evento quando o usuario digitar no input
    handleChange(event) {
        //altera o estado atual
        //pega todos os dados do estado e atualiza a descrição com o valor digitado no input
        this.setState({...this.state, description: event.target.value})
    }

    //adição de uma nova tarefa na lista
    handleAdd() {
        //adicionando tarefas no banco
        const description = this.state.description
        axios.post(URL, {description})
            //quando adiciona, chama a função refresh para atualizar a lista
            .then(resp => this.refresh())
    }

    //remoção de item da lista
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm
                    description={this.state.description} 
                    handleChange={this.handleChange} 
                    handleAdd={this.handleAdd} />
                <TodoList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}