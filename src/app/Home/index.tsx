import { StatusBar } from 'expo-status-bar';
import { View, Image} from 'react-native';
import {styles} from "./styles"
import { Button } from '@/components/Button';
import { Imput } from '@/components/Imput';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} >
      </Image>

    <View style={styles.form}>
    <Imput placeholder='O que gostaria de comprar? ' />
    <Button title="Entrar"/>
    </View>
    <View style={styles.content}></View>




    </View>
  )
};


