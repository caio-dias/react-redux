import React from 'react'
import IconButton from '../template/IconButton'

export default props => {
    //renderizando as linhas da tabela
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            //id unico, id vindo do mongo
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    {/* botao de remover item da lista, passando todo (elemento a ser removido) */}
                    <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}