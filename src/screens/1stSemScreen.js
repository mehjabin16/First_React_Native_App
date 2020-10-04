import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const FirstSemCourses = ()=>{
    const faculty =[
        { name: '1. CSE 4107', key:'1' },
        { name: '2. SWE 4101', key:'2' },
        { name: '3. HUM 4147', key:'3' },
        { name: '4. MATH 4141', key:'4' },
        { name: '5. PHYSICS 4143', key:'5' },
        { name: '6. HUM 4145', key:'6' },
        
    ];


       return(
       <View>
           <Text style={styles.header}>First Semester</Text>
           {
           faculty.map((item)=> {
             return(      
            <View key={item.key}>
            <Text style={styles.textStyle}>{item.name}</Text>
            </View>
             )
        } )}
       </View>
       );
}

const styles = StyleSheet.create(
    {   
        header:{
            paddingTop: 20,
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
            textAlign: "center",
        },
        textStyle:{
            marginTop: 24,
            padding: 20,
            fontSize: 20,
            backgroundColor: 'lightblue'
       
        },

    }
);

export default FirstSemCourses;