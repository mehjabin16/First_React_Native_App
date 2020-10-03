import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const SemesterScreen = ()=>{
   
       return(
       <View>
       <Text style={styles.textStyle}>1st Semester</Text>
      
       </View>
       );
}

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 20,
            textAlign: "center",
          
        },

    }
);

export default SemesterScreen;