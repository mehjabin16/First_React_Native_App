import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TouchButton=({text, onPress})=>{

    return(
        <TouchableOpacity onPress ={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                     {text}
                </Text>

            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        paddingTop: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginTop: 20,
        marginLeft:50,
        marginRight:50,
        marginBottom:10,
        backgroundColor: '#4A708B',

    },
    buttonText: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    
})

export default TouchButton