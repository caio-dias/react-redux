import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <div>
        <Family lastName='Silva'>
            {/* adicionando um Member como children de family */}
            <Member name='Caio' />
            <Member name='Zé' />
            <Member name='Felipe' />
        </Family>
        <br />
        <Family lastName='Souza'>
            {/* adicionando um Member como children de family */}
            <Member name='Caio' />
            <Member name='Zé' />
            <Member name='Felipe' />
        </Family>
    </div>
    ,document.getElementById('app')
)
