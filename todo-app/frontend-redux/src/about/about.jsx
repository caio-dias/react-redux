import React from 'react'
import PageHeader from '../template/pageHeader'

export default props => (
    <div>
        <PageHeader name='Sobre' small='Nós' />
        <div className='sobre'>
            <p>Sistemas de tarefas feito em React JS + Redux</p>
            <p>Feito por Caio Dias</p>
        </div>
    </div>
)