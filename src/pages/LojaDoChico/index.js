import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import {MainHeader} from './style'
import Cards from '../../components/Cards/index'

import {useNavigation} from '@react-navigation/native'


export default function LojaDoChico() {
const navigation = useNavigation();

 return (
     
   <View style={MainHeader.container}>

       <View style={[MainHeader.header, {backgroundColor:'#f2f2f2'}]}>

        <Image
            source = {require('../../assets/chico.jpg')}
            style={MainHeader.image}
        />
        
        <View style={[MainHeader.textContainer, {justifyContent:'space-around'}]}>
           
            
            <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                <Image
                source = {require('../../assets/face.png')}
                style={{width: 40, height: 40}}
                />
            </TouchableOpacity >

            <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                <Image
                source = {require('../../assets/insta.png')}
                style={{width: 40, height: 40}}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                <Image
                source = {require('../../assets/whatsapp.png')}
                style={{width: 40, height: 40}}
                />
            </TouchableOpacity>
        </View>

        </View>
   
        <ScrollView>

        <View style={[MainHeader.header, {borderBottomWidth: 0}]}>
            <View style={MainHeader.textContainer}>

                <TouchableOpacity>
                    <Text style={MainHeader.text}>Produtos</Text>
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
                />
            <Cards 
                imagem={require('../../assets/camisa2.jpg')}
                title = 'Camisa Motoqueiro'
                value = 'R$ 45,00'  
            />
    
            <Cards 
                imagem={require('../../assets/camisa2.jpg')}
                title = 'Camisa Motoqueiro'
                value = 'R$ 45,00'  
            />

            <Cards 
                imagem={require('../../assets/camisa1.jpg')}
                title = 'Camisa Caveira '
                value = 'R$ 50,00'     
            />

            <Cards 
                imagem={require('../../assets/camisa1.jpg')}
                title = 'Camisa Caveira '
                value = 'R$ 50,00'    
            />
             <Cards 
                imagem={require('../../assets/camisa2.jpg')}
                title = 'Camisa Motoqueiro'
                value = 'R$ 45,00'  
            />

        </View> 

        </ScrollView>
   
   </View>
  );
}
