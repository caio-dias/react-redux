import React from 'react'
//dependencias do router e historico de navegacao
import {Router, Route, Redirect, hashHistory} from 'react-router'
//componentes que serão usados no roteamento
import About from '../about/about'
import Todo from '../todo/todo'

export default props => (
    //criando o router e setando a estrategia de historico
    <Router history={hashHistory}>
        {/*setando paths e componentes a serem carregados para cada path */}
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        {/* quando for setada qualquer url invalida, redireciona para /todos */}
        <Redirect from='*' to='/todos' />
    </Router>
)