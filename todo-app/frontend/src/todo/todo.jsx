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
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
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
            .then(resp => console.log('funfou'))
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm
                    description={this.state.description} 
                    handleChange={this.handleChange} 
                    handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}