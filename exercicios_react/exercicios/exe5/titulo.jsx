import React from 'react'

//componente me classe
class Titulo extends React.Component {
    //metodo de render e return é obrigatorio quando se trabalha com classe
    render() {
        return <h1>{this.props.value}</h1>
    }
}

export default Titulo