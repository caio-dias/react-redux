import React,{Component} from 'react'
import {connect} from 'react-redux'
//faz o bind das actions do componente, liga ele e o dispatch, que dispara as acoes para acionar os reducers
import {bindActionCreators} from 'redux'
import Grid from '../template/grid'
import IconButton from '../template/IconButton' 
import {changeDescription, search, add, clear} from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        //quando o componente estiver pronto a lista vem preenchida
        this.props.search()
    }

    keyHandler(e) {
        //extraindo metodo de search e add + atributo description de props
        const {add, search, description, clear} = this.props

        //ao apertar o enter, se tiver com o shift apertado, busca o valor do input, se nao add o valor na lista
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            //se apertar o esc, limpa a busca
            clear()
        }
    }

    render() {
        //extraindo metodo de search e add + atributo description de props
        const { add, search, description, clear } = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    {/* value vindo do estado do componente, que vem como props */}
                    {/* componente controlado, a dom nao manda mais no componente, e sim o estado do componente */}
                    <input type='text' id='description'
                        className='form-control'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        placeholder='Adicione uma tarefa'
                        value={this.props.description} />
                </Grid>
                <Grid cols='12 3 2'>
                    {/* quando o metodo recebe param, precisa chamar a partir de uma funcao anonima */}
                    <IconButton style='primary' icon='plus' onClick={() => add(description)} />
                    <IconButton style='info' icon='search' onClick={search} />
                    <IconButton style='default' icon='close' onClick={() => clear()} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
//mapeando os eventos para serem usados nas props
//dispatch dispara as acoes e passa as acoes para todos os reducers
//bindActionCreators recebe as actions que o componente ira usar, e passa o dispatch para ligar aos reducers
const mapDispatchToProps = dispatch => 
    bindActionCreators({changeDescription, search, add, clear}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)