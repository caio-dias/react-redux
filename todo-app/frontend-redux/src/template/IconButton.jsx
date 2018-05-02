import React from 'react'
import If from './if'

//template padrao de botoes do todoForm
export default props => (
    //se as props nao estiverem em hide, mostra o botao (usando o componente de if)
    <If test={!props.hide}>
        <button className={'btn btn-' + props.style} onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </If>
)

