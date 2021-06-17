import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    Text, 
    View, 
    KeyboardAvoidingView, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    Animated,
    Keyboard,
    StatusBar} from 'react-native'

export default function Login() {

    const [offset]  = useState(new Animated.ValueXY({x: 0, y: 80}))
    const [opacity] = useState(new Animated.Value(0))
    const [logo]    = useState(new Animated.ValueXY({x:300, y:300}))

    useEffect(()=>{

        Animated.parallel([
          Animated.spring(offset.y, {
            useNativeDriver: false,
            toValue: 0,
            speed: 4,
            bounciness: 20,
          }),
          Animated.timing(opacity, {
            useNativeDriver: false,
            toValue: 1,
            duration: 400,
          })
        ]).start();
        
      }, [])

 return (

    <KeyboardAvoidingView style={styles.background}>
    <StatusBar backgroundColor='black' ></StatusBar>
    <View style={styles.containerLogo}>
      <Animated.Image
      style={{
        width: logo.x,
        height: logo.y,
      }}
        source={require('../../assets/Logomarca.png')}
      ></Animated.Image>
    </View>

  <Animated.View style={[
    styles.container,
    {
      opacity: opacity,
      transform: [
        { translateY: offset.y}
      ]
    }
    ]}>
      
    <TextInput style={styles.input}
      placeholder="   Email"
      autoCorrect={false}
      onChangeText={()=>{}}
    ></TextInput>

    <TextInput style={styles.input}
      placeholder="   Senha"
      autoCorrect={false}
      onChangeText={()=>{}}
    ></TextInput>

    <TouchableOpacity style={styles.bntSubmit}>
      <Text style={styles.submitText}>Entrar</Text>
    </TouchableOpacity>


    <TouchableOpacity>
      <Text style={{color:'#fff', fontSize: 12}}>Esqueceu a senha?</Text>
    </TouchableOpacity>

    <Text style={styles.naoPossuiConta}>Ainda não possui conta?</Text>

    <TouchableOpacity style={styles.bntRegister}>
      <Text style={styles.registerText}>Cadastre - se</Text>
    </TouchableOpacity>
  </Animated.View>

  </KeyboardAvoidingView>
   
  )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#14152A',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    containerLogo: {
      flex: 1,
      justifyContent: 'center',
      marginTop: '20%',
    },
  
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
      paddingBottom: 70,
    },
  
    input: {
      backgroundColor: '#fff',
      width: '90%',
      height: 45,
      marginBottom: 15,
      color: '#222',
      fontSize: 17, 
      borderRadius: 7
    },
  
    bntSubmit: {
      backgroundColor: '#35AAFF',
      width: '90%',
      height: 45,
      borderRadius: 7,
      marginBottom: '2%',
    },
  
    submitText: {
      color: '#fff',
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 20, 
      marginTop: '2%',
    },
  
    bntRegister: {
      marginTop: '5%',
      backgroundColor: '#35AAFF',
      width: '60%',
      height: 45,
      borderRadius: 7,
    },
  
    registerText: {
      color: '#fff',
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 20, 
      marginTop: '4%',
    },
  
    naoPossuiConta: {
      color: '#fff',
      marginTop: '2%',
    }
  
  });