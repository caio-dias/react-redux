import React from 'react'

//conecta os dados do componente com a store e actions
import {connect} from 'react-redux'
//action creator
import {bindActionCreators} from 'redux'
import {markAsDone, markAsPending, remove} from './todoActions'

import IconButton from '../template/IconButton'

const TodoList = props => {
    //renderizando as linhas da tabela
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            //id unico, id vindo do mongo
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                <td>
                    {/* marca a tarefa como terminada, passando todo como referencia, esconde o botao caso ele esteja done */}
                    <IconButton style='success' icon='check' onClick={() => props.markAsDone(todo)} hide={todo.done} />
                    {/* marca a tarefa como nao terminada, passando todo como referencia */}
                    <IconButton style='warning' icon='undo' onClick={() => props.markAsPending(todo)} hide={!todo.done} />
                    {/* botao de remover item da lista, passando todo (item a ser removido) */}
                    <IconButton style='danger' icon='trash-o' onClick={() => props.remove(todo)} hide={!todo.done} />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

//mapeando o estado global com as props do componente
//adicionando a lista para ser usada com as props do componente
//em props usamos props.list para recuperar o state.todo.list dos reducers
const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPending, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)