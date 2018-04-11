import React from 'react'
import { childrenWithProps } from '../../utils/reactUtils'

export default props => (
    <div>
        {/* tudo que passar no componente pai, ira para o props.children */}
        {/* {props.children} */}
        {/* pode se usar assim ^^^ */}
        {/* usando a util, passamos os filhos e a propriedade lastName */}
        { childrenWithProps(props.children, props) }
    </div>
)