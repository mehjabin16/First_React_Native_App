import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

const ProfileScreen = ()=>{
   
       return(
       <View style={styles.container}>
       <Image style={styles.imageStyle} source ={require("./../../assets/Nafisa.jpeg")} />
       <Text style={styles.textStyle}>Name: Nafisa Mehjabin</Text>
       <Text style={styles.textStyle}>ID: 170042033</Text>
       <Text style={styles.textStyle}>Room: Utility-404</Text>
       <Text style={styles.textStyle}>Email: nafisamehjabin@iut-dhaka.edu</Text>
       </View>
       );
}

const styles = StyleSheet.create(
    {
        container:{
           backgroundColor:'#F3FAF1',
           height: 800,
          
        },
        imageStyle:{
            marginTop: 10,
            alignSelf:'center',
            height: 350,
            width: 250,
           
         },
        textStyle:{
            fontSize: 20,
            paddingTop: 15,
            marginStart: 20,
        },

    }
);

export default ProfileScreen;