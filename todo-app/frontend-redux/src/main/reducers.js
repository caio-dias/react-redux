//arquivo com todos os reducers da aplicacao
import {combineReducers} from 'redux'
import todoReducer from '../todo/todoReducer'

//o reducer devolve o estado atualizado, ele devolve um novo obj
const rootReducer = combineReducers({
    //setando cada valor do estado
    todo: todoReducer
})

export default rootReducer