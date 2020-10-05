import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const FacultylistScreen = ()=>{
    const faculty =[
        { name: '1. Ashraful Alam Khan', key:'1' },
        { name: '2. Mohayeminul Islam', key:'2' },
        { name: '3. Sohel Ahmed', key:'3' },
        { name: '4. Dr. Md. Abdul Hakim Khan', key:'4' },
        { name: '5. Dr. Fazlul Hasan Siddiqui', key:'5' },
        { name: '6. Tasnim Ahmed', key:'6' },
        { name: '7. Anas Jawad', key:'7' },
        { name: '8. Mohsinul Kabir Shanto', key:'8' },
        { name: '9. Lutfun Nahar Lota', key:'9' },
    ];


       return(
       <View>
           <ScrollView style= {styles.scrollviewStyle}>
               <Text style={styles.header}>List of Faculty Members</Text>
           {
           faculty.map((item)=> {
             return(      
            <View key={item.key}>
            <Text style={styles.textStyle}>{item.name}</Text>
            </View>
             )
        } )}
        </ScrollView>
       </View>
       );
}

const styles = StyleSheet.create(
    {
        textStyle:{
            marginTop: 24,
            padding: 20,
            fontSize: 20,
            
       
        },
        scrollviewStyle:{
            backgroundColor:'#F3FAF1'
 
        },
        header:{
            marginTop:20,
            fontSize: 28,
            textAlign:'center',
            fontWeight:'bold',
            
        },


    }
);

export default FacultylistScreen;