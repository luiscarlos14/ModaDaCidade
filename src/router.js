import  React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import {
  createDrawerNavigator
} from '@react-navigation/drawer';

import {createStackNavigator} from '@react-navigation/stack'

import Home from './pages/Home'
import Detail from './pages/Detail'
import LojaDoChico from './pages/LojaDoChico'
import Login from './pages/Login'

function style({ navigation }) {
    return(
      <View style={button.container}>
    
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={button.button}>
          <Text style={button.text}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LojaDoChicoStack')} style={button.button}>
        <Text style={button.text}>Lojas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={button.button}>
        <Text style={button.text}>Login</Text>
        </TouchableOpacity>

</View>
 
 )
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


 export default function MyDrawer() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName={Home} drawerContent = {style}>

            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Loja Do Chico" component={LojaDoChico} />

            <Stack.Screen 
                    name="HomeStack"
                    component={Home}
                    options={{headerShown: false}}
               />

            <Stack.Screen 
                    name="Detail"
                    component={Detail}
                    options={{headerShown: false}}
               />

           <Stack.Screen 
                    name="LojaDoChicoStack"
                    component={LojaDoChico}
                    options={{headerShown: false}}
               /> 
           <Stack.Screen name="Login" component={Login} options={{headerShown:false}}    />

        </Drawer.Navigator>

    </NavigationContainer>
  );
}



    
 

export const button = StyleSheet.create({
  container:{
    alignItems: 'center',
    marginTop: '30%'
   
  },
  button:{
    width: '80%',
    height: 50,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: "5%",
    borderRadius: 10
  },
  text:{
      fontSize: 20,
  }

})