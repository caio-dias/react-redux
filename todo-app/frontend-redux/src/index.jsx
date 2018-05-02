import React from "react"
import ReactDOM from "react-dom"

//dependencias do redux
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'

//middlewares
//resolve payloads que retornam promises, ele espera a promise ser resolvida, para assim disparar o reducer com o valor certo
import promise from 'redux-promise'
//dentro de uma action creator, retornar um array com varias actions
//essas actions rodarão todas juntas, podendo dar um problema de sincronismo
import multi from 'redux-multi'
//resolve o problema de actions assincronas, so roda uma quando a outra tiver terminado
//te possibilita fazer o dispatch, para acertar a ordem que as acoes devem ser disparadas
import thunk from 'redux-thunk'

//reducers
import reducers from './main/reducers'

import App from './main/app'

//plugin do chrome de debugger
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//chamando a lista de middlewares com a funcao applymiddlewares
//criando a store,com createstore todos os dados do estado ficam dentro dela, passando os reducers e devtools
const store = applyMiddleware(multi, promise, thunk)(createStore)(reducers, devTools)

ReactDOM.render(
    //usando o provider, engloba a store nos componentes da aplicação, para o redux poder transitar entre eles
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('app')
)