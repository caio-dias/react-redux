import React from 'react'
import ReactDOM from 'react-dom'
//dependencias do redux
//createstore = criar o store, que é o estado unico da aplicacao, ele é um obj formado por varios attrs, cada attr é controlado por um reducer 
//combinereducers = cada reducer controla um atributo, e o combine reducers combina todos em um unico obj, que é o store
import {combineReducers, createStore} from 'redux'
//passa o estado para os componentes externos
import {Provider} from 'react-redux'
import Field from './field'
//importando o reducer
import fieldReducer from './fieldReducer'

//reducers sao funcoes puras, recebem o estado original e acao
//os reducers atualizam o estado
const reducers = combineReducers({
    //o campo field, é controlado por fieldReducer
    //quando uma acao for chamada, o fieldReducer vai ser chamado
    field: fieldReducer
})

ReactDOM.render(
    //criando o store passando os reducers
    //provider liga a store em todas suas tags filhas
    <Provider store={createStore(reducers)}>
        <Field initialValue='teste' />
    </Provider>,
    document.getElementById('app')
)