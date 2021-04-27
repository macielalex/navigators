import React from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'


export default function TextoCentral({navigation}){
    return (
        <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000'                
            }

        }>
            <Text style={{ 
                fontSize: 50,
                color: '#FFF'}}>                
                Tela
            </Text>

            <Button style={styles.but} title="Tela C" color='#000d53' 
            onPress={()=>{navigation.navigate("TelaC")}}
            />

        </View>
    )

             
    }  
    
    const styles = StyleSheet.create({
        but:{
            height: 40,
            width: '80%'
        }
    }) 