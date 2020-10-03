import React from 'react';
import {Text, StyleSheet, Button, View, Image} from 'react-native';

const HomeScreen = (props)=>{
    console.log(props);
       return(
       <View>
        <Image style={styles.logoStyle} source ={require("./../../assets/iutpic.png")} />
        <Text style={styles.textStyle}>Department of CSE</Text>
        <Text style={styles.textStyle}>Programme: SWE</Text>
        <Button title= "My Profile"
        onPress={
           function(){
               //console.log("button pressed");
               props.navigation.navigate("Profile");
             }
          }
       />
       <Button title= "Semester Wise CourseList"
        onPress={
           function(){
               //console.log("button pressed");
               props.navigation.navigate("Semesters");
             }
          }
       />
       <Button title= "List of Faculty Memebers"
        onPress={
           function(){
               //console.log("button pressed");
               props.navigation.navigate("Facultylist");
             }
          }
       />
       </View>
       );
}

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: 'blue',
            textAlign: "center",
        },
        logoStyle:{
             height: 200,
             width: 150,
             alignSelf: "center",
             
        },

    }
);

export default HomeScreen;