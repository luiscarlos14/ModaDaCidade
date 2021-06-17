import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import Dot from '../../components/Dot/index'
import ButtonSize from '../../components/ButtonSize/index'

export default function home() {
  const navigation = useNavigation();
 return (
   <>

     <View style={styles.header}> 
       <TouchableOpacity  onPress={()=> navigation.navigate('Home')}>
          <Image
                source = {require('../../assets/back.png')}
                style={{width: 32, height: 32}}
            />
       </TouchableOpacity>
       <Text style={styles.title}>Camisa Caveira</Text>
      </View>

      <ScrollView style={styles.container}>

        <Image
          source = {require('../../assets/camisa1D.jpg')}
          style={styles.image}
          resizeMode='cover'
        />

        <View>
          <View style={{paddingLeft: '3%'}}>
            <Text style={styles.texto, {fontSize: 40}}>
              R$ 49,90
            </Text>
          </View>

          <View style={{opacity: .4, paddingLeft: '3%'}}>
            <Text style={styles.texto, {fontSize: 35}}>
                Camisa Caveira
            </Text>
          </View>
          <View style={{paddingLeft: '3%', paddingRight: '3%'}}>
            <Text>Contrary to popular belief, Lorem Ipsum is not simply random text.</Text>
          </View>

          <Text style={{marginLeft:'3%', paddingTop: '4%', fontSize: 20}}>Cores e Tamanhos disponíveis</Text>

          <View style={styles.dotContainer}>
            
              <Dot color='green' />
              <Dot color='red' />
              <Dot color='yellow' />
              <Dot color='blue' />
          </View>

          <View style={{flexDirection:'row', width:'100%'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                <ButtonSize bgColor = '#17181A' color = "#fff" size='P' />
                <ButtonSize bgColor = '#f8f8f8' color = "#ddd" size='M'/>
                <ButtonSize bgColor = '#f8f8f8' color = "#ddd" size='G'/>
                <ButtonSize bgColor = '#f8f8f8' color = "#ddd" size='GG'/>

            </ScrollView>
          </View>


          <Text style={{fontSize: 20, marginTop:'3%', marginLeft: '3%'}}>Vendido por:</Text>
          <View style={styles.vendedor}>

          
            <Text style={styles.nameVendedor}> LOJA DO CHICO</Text>

            <TouchableOpacity onPress={()=> navigation.navigate('LojaDoChico')} style={styles.bntVendedor}>
                <Text  style={styles.bnttxt}>Entre em Contato</Text> 
            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>
      
      
    
</>
  );
}

export const styles = StyleSheet.create({ 

  header:{
      flexDirection: 'row',
      alignItems: 'center',
      padding: '3%',
      backgroundColor: '#e5e5e5',
      borderBottomColor: '#c4c4c4',
      borderBottomWidth: 4
  },

  title:{
      fontSize: 30,
      paddingLeft: '10%',
     
  },

  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },

  image:{
    width: '100%'
  },

  texto:{
   
    paddingLeft: '3%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },

  vendedor:{
    marginTop: '3%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nameVendedor:{
    fontSize: 30,
  },
  bntVendedor:{
    marginTop: '3%',
    marginBottom: '10%',
    backgroundColor: '#ddd',
    borderRadius: 10,
    width: '50%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bnttxt:{
    fontSize: 20,
    color: 'black'
  }

 
})
