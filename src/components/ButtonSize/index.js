import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function ButtonSize(props) {
 return (
   <View style={[styles.container, {backgroundColor: props.bgColor}]}>
      <Text style={[styles.text, {color: props.color}]}>
          {props.size}
      </Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: 120,
        height: 50,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#e5e5e5',
        borderWidth: 3,
        marginHorizontal: 10
    },

    text:{
      color: '#fff',
      fontSize:18,
      textAlign: 'center',
      textAlignVertical: 'center'
    }

})