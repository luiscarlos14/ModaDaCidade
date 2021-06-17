import { Roboto_500Medium } from '@expo-google-fonts/roboto';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function Dot(props) {
 return (
   <View style = {[styles.container, {backgroundColor:props.color}]}>
   </View>
  );
}

const styles = StyleSheet.create({

    container:{
        width: Dimensions.get('window').width * 0.080,
        height: Dimensions.get('window').width * 0.080,
        borderRadius: Dimensions.get('window').width * 0.080 / 2,
        marginHorizontal: '2.5%',
        
    }
})