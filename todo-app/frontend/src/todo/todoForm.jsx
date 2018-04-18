import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/IconButton' 

export default props => {
    //acoes por teclas
    const keyHandler = (e) => {
        //ao apertar o enter, se tiver com o shift apertado, busca o valor do input, se nao add o valor na lista
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            //se apertar o esc, limpa a busca
            props.handleClear()
        }
    }
    
    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                {/* value vindo do estado do componente, que vem como props */}
                {/* componente controlado, a dom nao manda mais no componente, e sim o estado do componente */}
                <input type='text' id='description'
                    className='form-control'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    placeholder='Adicione uma tarefa'
                    value={props.description} />
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd} />
                <IconButton style='info' icon='search' onClick={props.handleSearch} />
                <IconButton style='default' icon='close' onClick={props.handleClear} />
            </Grid>
        </div>
    )
}