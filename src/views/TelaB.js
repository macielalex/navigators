import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, StyleSheet, Text, View, } from 'react-native'
import TextoCentral from '../components/TextoCentral'
import axios from 'axios'
import { Server, ShowError, ShowSucess } from '../common'


export default props => {


    const [load, setLoad] = useState(true)
    const [getting, setGetting] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')



    const getLogin = async () => {
        console.log(`${Server}/signin`)
        setGetting(true)
        try {
            const res = await axios.post(`${Server}/signin`, {
                email: "pedro@gmail.com",
                password: "123"
            })
            false
            setToken(res.data.token)
            setGetting(false)





        } catch (e) {
            
            ShowError(e)
            setGetting(false)
        }
       
    }
    const initPage = async () => {
        console.log('Tela B')
        await getLogin()
        setLoad(!load)
        // setTimeout(()=>{setGetting(false)}, 5000)
        setTimeout(() => { 
           
            setToken('Token') }, 2000)
        
    }

    const clearItens = () => {
        setToken('')
    }

    useEffect(() => {
        clearItens()
        props.navigation.addListener('focus', () => initPage())
    }, [])


    const today = new Date()
    const r = props.route
    const numero = r && r.params && r.params.numero
        ? props.route.params.numero : 0
    return (
        <>
            {getting
                ? <View style={styles.container}>
                    <ActivityIndicator size='large' color='#0099e5' />
                </View>
                : <View style={styles.container}>
                    <Text style={styles.text}>
                        {token}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Button title="Voltar" onPress={() => { props.navigation.goBack() }} />
                        <Button title="Seguir" onPress={() => {
                            clearItens()
                            props.navigation.navigate('TelaC')
                        }} />

                    </View>

                </View>}
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        fontSize: 28,
        fontWeight: 'bold'
    }
})