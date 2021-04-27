import React from 'react'
import {Button, StyleSheet, Text, View } from 'react-native'
import TextoCentral from '../components/TextoCentral'


export default props => {
    const r = props.route
    const numero = r && r.params && r.params.numero
        ? props.route.params.numero : 0
    return (

       <View style={styles.container}>
           <Text style={styles.text}>
               Tela E
           </Text>
           <Button title="Voltar" onPress={()=>{props.navigation.goBack()}} />
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