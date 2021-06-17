import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

 const  Cards = (props) => {

    function filterDesc(title){
        if(title < 26){
            return title;
        }else{
        return `${title.substring(0, 24)}`}
    }

 return (
     <View style={styles.main}>

         <TouchableOpacity onPress={props.onClick}>

            <View  style={styles.container}>

                <Image
                source = {props.imagem}
                style = {styles.img}
                />

            </View>

        <View style={styles.label}>
            <Text style={styles.text}>{filterDesc(props.title)}</Text>
            <Text style={styles.text}>{props.value}</Text>
        </View>

        </TouchableOpacity>
</View>
  );
}


export const styles = StyleSheet.create({
    main:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    container:{
        width: 180, 
        height: 250, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    img:{
        width: '100%',
        height: '100%',
    },

    label:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#656573', 
        width:'100%',
        borderRadius: 5,
        paddingTop:'1%',
        paddingBottom: '1%',
        marginBottom: '2%'
    },
    text:{
        fontSize: 20,
        color:'#fff',
       
    }

})

export default Cards;