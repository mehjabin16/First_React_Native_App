import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const FacultylistScreen = ()=>{
    const faculty =[
        { name: '1. Professor Dr. Muhammad Mahbub Alam', key:'1' },
        { name: '2. Professor Dr. Md. Hasanul Kabir', key:'2' },
        { name: '3. Professor Dr. Abu Raihan Mostofa Kamal', key:'3' },
        { name: '4. Dr. Fazlul Hasan Siddiqui', key:'4' },
        { name: '5. Mohayeminul Islam', key:'5' },
        { name: '6. Sohel Ahmed', key:'6' },
        { name: '7. Redwan Kabir', key:'7' },
        { name: '8. Bakhtiar HAsan', key:'8' },
        { name: '9. Tasnim Ahmed', key:'9' },
        { name: '10. Anas Jawad', key:'10' },
        { name: '11. Lutfun Nahar Lota', key: '11' },
        { name: '12. Sadia Sharmin', key: '12' },
        { name: '13. Md. Jubair Ibna Mostafa', key: '13' },
    ];


       return(
       <View style= {styles.containerStyle}>
        <Text style={styles.header}>Faculty Members</Text>
          <FlatList
           data= {faculty}
           renderItem ={function ({item}) {
            return(<Text style={styles.textStyle}>{item.name}</Text>);          
        } }
        />
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
        containerStyle:{
            backgroundColor:'#F3FAF1',
        
        },
        header:{
            backgroundColor: '#53868B',
            padding: 16,
            color: 'white',
            fontSize: 30,
            textAlign:'center',
            fontWeight:'bold',
            
        },


    }
);

export default FacultylistScreen;