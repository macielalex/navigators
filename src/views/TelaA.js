import React, {useEffect, useState} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import TextoCentral from '../components/TextoCentral'


export default props => {

    const [load,setLoad] = useState(true)

    const initPage =() =>{
        console.log('Tela A')
        setLoad(!load)
    }

    useEffect(()=>{
        

        props.navigation.addListener('focus', ()=>initPage())
    },[])


    const r = props.route
    const numero = r && r.params && r.params.numero
        ? props.route.params.numero : 0
    return (

       <View style={styles.container}>
           <Text style={styles.text}>
               Tela A
           </Text>
          <Button title="Seguir" onPress={()=>{props.navigation.navigate('TelaB')}} />
       </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    
    },
    text: {fontSize: 28,
    fontWeight:'bold'}
})