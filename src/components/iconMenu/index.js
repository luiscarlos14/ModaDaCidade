import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
useIsDrawerOpen  } from '@react-navigation/drawer';
export default function iconMenu({navigation}) {
  
    const isDrawerOpen = useIsDrawerOpen()
 return (
   <View style={styles.container}>
       <TouchableOpacity onPress={() => {isDrawerOpen.navigation.openDrawer()}}>


       <Image
         source = {require('../../assets/menu.png')}
         style={{width: 40, height: 40}}
        />

       </TouchableOpacity>
       
   </View>

  );
}


export const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        left: '5%',
        top: 20
    }

})