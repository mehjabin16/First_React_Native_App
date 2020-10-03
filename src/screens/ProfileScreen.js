import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const ProfileScreen = ()=>{
   
       return(
       <View>
       <Text style={styles.textStyle}>Name: Nafisa Mehjabin</Text>
       <Text style={styles.textStyle}>ID: 170042033</Text>
       <Text style={styles.textStyle}>Room: Utility-404</Text>
       <Text style={styles.textStyle}>Email: nafisamehjabin@iut-dhaka.edu</Text>
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

export default ProfileScreen;