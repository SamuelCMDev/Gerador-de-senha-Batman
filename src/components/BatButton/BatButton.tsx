import React,{useState} from 'react';
import { View,Button,Text,Pressable} from 'react-native';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import { styles } from './BatButtonStyle';
import generationPass from '../../services/password';
import * as Clipboard from 'expo-clipboard'
export function BatButton() {
  const [pass, setPass] = useState('')

  function apertarBotãoGerar(){
    let generateToken = generationPass
    setPass(generateToken)
  }
  function apertarBotãoCopiar(){
    Clipboard.setStringAsync(pass)
  }
  return (
    <>
        <BatTextInput pass={pass}/>
        <Pressable
        style={styles.button}
        onPress={(apertarBotãoGerar)

        }>
         <Text style={styles.text}>Gerar</Text>
        </Pressable>  
        <Pressable
        style={styles.button }
    
        onPress={apertarBotãoCopiar}>
         <Text style={styles.text}>Copiar</Text>
        </Pressable>         

    </>
  );
}