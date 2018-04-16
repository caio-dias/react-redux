import React from 'react'
import Grid from '../template/grid'
import Button from '../template/button' 

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 11'>
            <input type='text' id='description' className='form-control' placeholder='Adicione uma tarefa'></input>
        </Grid>
        <Grid cols='12 3 1'>
            <Button style='primary' icon='plus'/>
        </Grid>
    </div>
)