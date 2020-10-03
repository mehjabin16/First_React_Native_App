import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const FacultylistScreen = ()=>{
   
       return(
       <View>
       <Text style={styles.textStyle}>1. Mr.X</Text>
       <Text style={styles.textStyle}>2. Mr.Y</Text>
       <Text style={styles.textStyle}>3. Mr.Z</Text>
       <Text style={styles.textStyle}>4. Mr.W</Text>
       </View>
       );
}

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 20,
           
        },

    }
);

export default FacultylistScreen;