import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import {MainHeader} from './style'
import Cards from '../../components/Cards/index'
import Menu from '../../components/iconMenu/index'

import {useNavigation} from '@react-navigation/native'


export default function home() {

const navigation = useNavigation();

 return (
     
   <View style={MainHeader.container}>


       <View style={[MainHeader.header, {backgroundColor:'#f2f2f2'}]}>


        <Image
            source = {require('../../assets/header.png')}
            style={MainHeader.image}
        />

        
        <View style={MainHeader.textContainer}>
            <TouchableOpacity>
                <Text style={MainHeader.text}>Cidade</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                <Image
                source = {require('../../assets/IconFilter.png')}
                style={{width: 32, height: 32}}
                />
            </TouchableOpacity>
        </View>
        </View>
   
        <ScrollView>

        <View style={[MainHeader.header, {borderBottomWidth: 0}]}>
            <View style={MainHeader.textContainer}>

                <TouchableOpacity>
                    <Text style={MainHeader.text}>Lançamentos</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                <Image
                source = {require('../../assets/loupe.png')}
                style={{width: 32, height: 32}}
                />
                </TouchableOpacity>
            </View>
        </View>
            
        <View style={
            {flexDirection:'row', 
             flexWrap: 'wrap', 
             justifyContent: 'space-around',
        
             }}>

            <Cards 
                imagem={require('../../assets/camisa1.jpg')}
                title = 'Camisa Caveira'
                value = 'R$ 50,00'
                onClick={()=> navigation.navigate('Detail')}  
                />
            <Cards 
                imagem={require('../../assets/camisa2.jpg')}
                title = 'Camisa Motoqueiro'
                value = 'R$ 45,00'  
                onClick={()=> navigation.navigate('Detail')}
            />
    
            <Cards 
                imagem={require('../../assets/camisa2.jpg')}
                title = 'Camisa Motoqueiro'
                value = 'R$ 45,00'  
                onClick={()=> navigation.navigate('Detail')}
            />

            <Cards 
                imagem={require('../../assets/camisa1.jpg')}
                title = 'Camisa Caveira '
                value = 'R$ 50,00'  
                onClick = {()=>  navigation.navigate('Detail')}
            />

            <Cards 
                imagem={require('../../assets/camisa1.jpg')}
                title = 'Camisa Caveira '
                value = 'R$ 50,00'  
                onClick = {()=>  navigation.navigate('Detail')}
            />
             <Cards 
                imagem={require('../../assets/camisa2.jpg')}
                title = 'Camisa Motoqueiro'
                value = 'R$ 45,00'  
                onClick={()=> navigation.navigate('Detail')}
            />

        </View> 

        </ScrollView>
   
   </View>
  );
}
