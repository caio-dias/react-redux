//dependencias de http
import axios from 'axios'
const URL = 'http://localhost:3003/api/todos'

//acao disparada quando o evento onChange do input é acionado, devolve o tipo da ação e o payload que é o valor do input
export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

//trazendo a lista preenchida com os dados do banco
export const search = () => {
    //para o payload funcionar corretamente, usamos um middleware chamado thunk para que a requisicao assincrona nao devolva um resultado nulo
    //o middleware espera a promisse ser resolvida e so assim termina de executar a acao do reducer
    return (dispatch, getState) => {
        //o thunk possui a getState
        const description = getState().todo.description
        //se é busca, concatena a busca no get
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            //chama o metodo de pesquisa e passa a description para o payload, para resolver erro da pesquisa de tarefa
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

//adicionando novas tarefas
export const add = (description) => {
    //o thunk acessa retorna um dispatch com as acoes necessarias para a aplicacao funcionar corretamente com acoes assincronas
    return dispatch => {
        //adiciona no banco a nova tarefa (descricao/value do input)
        axios.post(URL, { description })
            //encadeando thens, para rodar uma funcao de cada vez
            //chamando o clear para limpar a descricao do form
            .then(resp => dispatch(clear()))
            //atualizando a tela com a nova tarefa
            .then(resp => dispatch(search()))
    }
}

//marcar tarefa concluida
export const markAsDone = (todo) => {
    return dispatch => {
        //evoluindo o done para true
        axios.put(`${URL}/${todo._id}`,{...todo, done:true})
            .then(resp => dispatch(search()))
    }
}

//marcar tarefa pendente
export const markAsPending = (todo) => {
    return dispatch => {
        //evoluindo o done para false
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

//remover tarefa
export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

//limpa formulario
export const clear = () => {
    //usando o multi
    return [{type: 'TODO_CLEAR'}, search()]
}