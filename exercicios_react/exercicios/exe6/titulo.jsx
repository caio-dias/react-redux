import React from 'react'

class Titulo extends React.Component {
    //setando o estado do componente
    constructor(props) {
        super(props)
        //inicializando o estado do componente com um valor inicial recebido como propriedade
        this.state = {value: props.initialValue, nome: 'contador'}
    }

    sum(delta) {
        //evoluindo o valor do estado com o setState
        //ele cria um novo obj, deixando o rasto do antigo, por isso se passa um obj, e nao se faz uma atribuicao
        this.setState({value: this.state.value + delta})
    }

    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                {/* chamando funcoes no evento de onclick */}
                <button onClick={() => this.sum(-1)}>Decrementar</button>
                <button onClick={() => this.sum(1)}>Incrementar</button>
            </div>
        )
    }
}

export default Titulo