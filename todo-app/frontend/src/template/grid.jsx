import React from 'react'

export default class Grid extends React.Component {
    //grid bootstrap para setar numero das colunas para diferentes dispositivos
    toCssClasses(numbers) {
        //propriedade cols = parametros separados por espaço
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`
        
        return classes
    }
    
    render () {
        //adiciona a chamada da funcao
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return (
            //retorna a div com as classes do bootstrap com o template filho dentro
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}