const INITIAL_STATE = {value: 'Opa'}

//reducer recebe como parametro o estado e a acao
export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'VALUE_CHANGED':
            //se a acao for essa, retorna o payload, que é o estado mais atual
            return {value:action.payload}    
        default:
            //se nao, retorna o state no valor atual
            return state
    }
}