import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/IconButton' 

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 11'>
            {/* value vindo do estado do componente, que vem como props */}
            {/* componente controlado, a dom nao manda mais no componente, e sim o estado do componente */}
            <input type='text' id='description' 
            className='form-control' 
            onChange={props.handleChange}
            placeholder='Adicione uma tarefa' 
            value={props.description} />
        </Grid>
        <Grid cols='12 3 1'>
            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd}></IconButton>     
        </Grid>
    </div>
)