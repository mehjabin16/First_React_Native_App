import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';
import TouchButton from '../components/button.js'

const SemesterScreen = (props)=>{
    console.log(props);
       return(
       <View style={styles.container}>
       <TouchButton text = "1st Semester" onPress={
             function(){
               
                props.navigation.navigate("1stSem");
              }
        }>     
        </TouchButton>
        <TouchButton text = "2nd Semester" onPress={
             function(){
               
                props.navigation.navigate("2ndSem");
              }
        }>    
        </TouchButton>
        <TouchButton text = "3rd Semester" onPress={
             function(){
               
                props.navigation.navigate("3rdSem");
              }
        }>    
        </TouchButton>
        <TouchButton text = "4th Semester" onPress={
             function(){
               
                props.navigation.navigate("4thSem");
              }
        }>    
        </TouchButton>
        <TouchButton text = "5th Semester" onPress={
             function(){
               
                //props.navigation.navigate("3rdSem");
              }
        }>    
        </TouchButton>
        <TouchButton text = "6th Semester" onPress={
             function(){
               
                //props.navigation.navigate("3rdSem");
              }
        }>    
        </TouchButton>
       </View>
       );
}

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 20,
            textAlign: "center",
          
        },
       
        container:{
            backgroundColor: "#F3FAF1",
            height: 800,
            
        },

    }
);

export default SemesterScreen;