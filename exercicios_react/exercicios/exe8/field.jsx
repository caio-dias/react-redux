import React from 'react'
//conecta a funcao de mapeamento de atributos com a store
import {connect} from 'react-redux'
//ligando as acoes criadas com o dispatchers
import {bindActionCreators} from 'redux'
//importando metodo changeValue
import {changeValue} from './fieldActions'

class Field extends React.Component {

    render () {
        return(
            <div>
                <label>{this.props.value}</label><br/>
                {/* ao chamar o evento de change, chama a função que muda o estado value e mostra no label */}
                <input type="text" onChange={this.props.changeValue} value={this.props.value}/>
            </div>
        )
    }
}

//mapeando os atributos do estado global(store), para que eles estejam nas props do componente
function mapStateToProps(state) {
    return {
        //acessando o valor da função pura field, mandada no combineReducers no index
        //dentro do componente, tera uma prop chamada value, ele vem de state.field.value
        value: state.field.value
    }
}

//mapeando metodos(action creators) para a propriedade, dispatch é quem dispara as acoes
function mapDispatchToProps(dispatch) {
    //fazendo a ligacao dos actioncreators com o dispatch
    return bindActionCreators({changeValue},dispatch)
}

//exportando o decorator
export default connect(mapStateToProps,mapDispatchToProps)(Field)