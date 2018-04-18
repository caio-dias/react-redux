import React from 'react'
import IconButton from '../template/IconButton'

export default props => {
    //renderizando as linhas da tabela
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            //id unico, id vindo do mongo
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                <td>
                    {/* marca a tarefa como terminada, passando todo como referencia, esconde o botao caso ele esteja done */}
                    <IconButton style='success' icon='check' onClick={() => props.handleMarkAsDone(todo)} hide={todo.done} />
                    {/* marca a tarefa como nao terminada, passando todo como referencia */}
                    <IconButton style='warning' icon='undo' onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done} />
                    {/* botao de remover item da lista, passando todo (item a ser removido) */}
                    <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} hide={!todo.done} />
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