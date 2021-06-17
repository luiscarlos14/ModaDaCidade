import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  createDrawerNavigator, DrawerItemList,
} from '@react-navigation/drawer';

import {createStackNavigator} from '@react-navigation/stack'

import Home from './pages/Home'
import Detail from './pages/Detail'
import LojaDoChico from './pages/LojaDoChico'

import CustomDrawer from './components/CustomDrawer';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


 export default function MyDrawer() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName={Home} drawerContent = {CustomDrawer}>

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

        </Drawer.Navigator>

    </NavigationContainer>
  );
}



    
 

