export function changeValue(e) {
    //actions tem que retornar um objeto
    return {
        // nome da acao
        type: 'VALUE_CHANGED',
        //payload é o dado que vem junto com uma acao, value=valor da acao
        payload: e.target.value
    }
}