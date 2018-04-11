import React from 'react'

// criando um modulo para caso queira, nao precisar reescrever o codigo todas as vezes que for criar uma nova familia
// quando o compente pai precisa passar alguma propriedade, e essa prop sera usada junto com a children, se usa assim: 
function childrenWithProps(children, props) {
    // pegando os filhos e devolvendo eles com a propriedade do pai (lastName)
    return React.Children.map(props.children,
        // primeiro parametro de cloneElement é o children, segundo parametro sao as props que se passa no componente no modo tradicional
        // segundo param, usando spread para passar um clone, e nao a referencia em si *
        (child) => React.cloneElement(child, { ...props }))
}

export { childrenWithProps }