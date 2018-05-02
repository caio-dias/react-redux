import React from 'react'

//componente de condicoes, para evitar muitos ifs no codigo
export default props => {
    if (props.test) {
        return props.children
    } else {
        return false
    }
}