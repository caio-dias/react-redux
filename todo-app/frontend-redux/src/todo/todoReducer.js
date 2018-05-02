//estados do componente
const INITIAL_STATE = { description: '', list: [] }

//recebe o estado atual e a action
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //se action for essa, devolve o estado com a description atualizada vinda do payload
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
        case 'TODO_SEARCHED':
        //para o payload funcionar corretamente, usamos um middleware para que a requisicao assincrona nao devolva um resultado nulo
        //o middleware espera a promisse ser resolvida e so assim termina de executar a acao do reducer para que o valor nao venha nulo
            return {...state, list: action.payload}
        case 'TODO_CLEAR':
            //esvazia a descricao para poder adicionar outra
            return {...state, description: ''}
        default:
            return state
    }
}