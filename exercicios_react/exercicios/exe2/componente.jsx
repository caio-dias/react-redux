import React from 'react'

//criando o componente e o exportando
//ao utilizar os parenteses na arrow function, o return fica implicito
//props = sao as propriedades que voce manda ao instanciar a tag na chamada
export default (props) => (
    //usando a propriedade value para adicionar o texto no h1
    <h1>{props.value}</h1>
)