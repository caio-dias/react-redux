import React from 'react'

class Field extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: props.initialValue}
        //fazendo o mapeamento do this, para que o this aponte para a classe (field) e possa ser utilizado dentro de metodos
        //A ideia do bind é passar a referência do this do React para dentro das funções internas do ciclo de vida do componente
        //o bind vai ser utilizado como manipulador de eventos para ter seu contexto vinculado à instância do componente,
        //assim você pode acessar this.props e this.state através do seu manipulador vinculado.
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        //a funcao recebe o evento, e dentro do evento, pega-se o valor do input com o obj target.input
        this.setState({value: event.target.value})
    }

    render () {
        return(
            <div>
                <label>{this.state.value}</label><br/>
                {/* ao chamar o evento de change, chama a função que muda o estado value e mostra no label */}
                <input type="text" onChange={this.handleChange} value={this.state.value}/>
            </div>
        )
    }
}

export default Field