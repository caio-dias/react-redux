import React from 'react'
import If from './if'

//template padrao de botoes do todoForm
export default props => (
    //usando o componente if, mostra os botoes
    <If test={!props.hide}>
        <button className={'btn btn-'+props.style} onClick={props.onCLick}>
            <i className={'fa fa-'+props.icon}></i>
        </button>
    </If>
)