import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SemesterScreen from './src/screens/SemesterScreen.js';
import FacultylistScreen from './src/screens/FacultylistScreen.js';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name="Home" component={HomeScreen}/>
      <stack.Screen name="Profile" component={ProfileScreen}/>
      <stack.Screen name="Semesters" component={SemesterScreen}/>
      <stack.Screen name="Facultylist" component={FacultylistScreen}/>
    </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;