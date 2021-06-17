import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';

//import { StyleSheet, Text, View } from 'react-native';

//import Routes from './src/router'
import Routes from './src/router'
import Login from './src/pages/Login';
import { View } from 'react-native';

export default function App() {


  return (
    <>
      <StatusBar style="light" backgroundColor='#000' translucent={false} />
       
       <Routes/>

       {/* <Login /> */}
        
    </>

  );
}

