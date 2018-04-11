import React from 'react'
import ReactDOM from 'react-dom'
//importando o componente do diretorio dele
import Componente from './componente'

//reenderizando o componente na div app do index.html
ReactDOM.render(<Componente value="Componente ReactJS!"/>, document.getElementById('app'))