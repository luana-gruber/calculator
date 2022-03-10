import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4, //pega a dimensão da calculadora e divide por 4 colunas da calc
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#eddfe3',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#fff6ff'
    },
    operationButton: {
        color: '#fff6ff',
        backgroundColor: '#ffcbdb'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})

//retorna o jsx responsavel por renderizar o botão
export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )  
}