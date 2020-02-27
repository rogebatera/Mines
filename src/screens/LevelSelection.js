import React from 'react'
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native'
import ButtonLevel from '../components/ButtonLevel'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel} 
        visible={props.isVisible} animationType='slide' transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>

                    <Text style={styles.title}> Selecionar o Nível </Text>

                    <ButtonLevel Level={0.1} onLevel={() => props.onLevelSelected(0.1)} />
                    <ButtonLevel Level={0.2} onLevel={() => props.onLevelSelected(0.2)} />
                    <ButtonLevel Level={0.3} onLevel={() => props.onLevelSelected(0.3)} />

                </View>
            </View>
        </Modal>
    )    
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

{/* <TouchableOpacity style={[styles.button, styles.bgEasy]} 
onPress={() => props.onLevelSelected(0.1)} >
    <Text style={styles.buttonLabel}> Fácil </Text>
</TouchableOpacity> */}
{/* 
<TouchableOpacity style={[styles.button, styles.bgNormal]} 
onPress={() => props.onLevelSelected(0.2)} >
    <Text style={styles.buttonLabel}> Normal </Text>
</TouchableOpacity>

<TouchableOpacity style={[styles.button, styles.bgHard]} 
onPress={() => props.onLevelSelected(0.3)} >
    <Text style={styles.buttonLabel}> Difícil </Text>
</TouchableOpacity> */}