import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SemesterScreen from './src/screens/SemesterScreen.js';
import FacultylistScreen from './src/screens/FacultylistScreen.js';
import FirstSemCourses from './src/screens/1stSemScreen.js';
import SecondSemCourses from './src/screens/2ndSemScreen.js';
import ThirdSemCourses from './src/screens/3rdSemScreen.js';



const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name="Home" component={HomeScreen}/>
      <stack.Screen name="Profile" component={ProfileScreen}/>
      <stack.Screen name="Semesters" component={SemesterScreen}/>
      <stack.Screen options={{title:"Faculty List"}} name="Facultylist" component={FacultylistScreen}/>
      <stack.Screen options={{title:"Course List"}} name="1stSem" component={FirstSemCourses}/>
      <stack.Screen options={{title:"Course List"}} name="2ndSem" component={SecondSemCourses}/>
      <stack.Screen options={{title:"Course List"}} name="3rdSem" component={ThirdSemCourses}/>
    </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;