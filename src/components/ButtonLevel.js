import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default props => {

    switch (props.Level) {
    case 0.1:
        TextoLevel = 'Fácil'
        CorLevel = styles.bgEasy
        break;
    case 0.2:
        TextoLevel = 'Normal'
        CorLevel = styles.bgNormal
        break;
    case 0.3:
        TextoLevel = 'Dificil'
        CorLevel = styles.bgHard
        break;
    default:
        TextoLevel = 'Não Encontrado'
        break;
    }

    return (
        <TouchableOpacity style={[styles.button, CorLevel]} onPress={() => props.onLevel()} >
            <Text style={styles.buttonLabel}> {TextoLevel} </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button:{
        marginTop: 5,
        padding: 5,
        width: 150,
        alignItems:'center',
        borderRadius: 5
    },
    buttonLabel:{
        fontSize: 22,
        color:'#EEE',
        fontWeight: 'bold'
    },
    bgEasy:{
        backgroundColor: '#49b65d',       
    },
    bgNormal:{
        backgroundColor: '#2765f7',       
    },
    bgHard:{
        backgroundColor: '#F26337',       
    }
})