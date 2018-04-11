import React from 'react'
import ReactDOM from 'react-dom'
//importando mais de um componente
import {Primeiro, Segundo} from './componente'

ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
    , document.getElementById('app')
)