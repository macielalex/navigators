import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native'
import DrawerContent from '../components/DrawerItens'

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import TelaD from '../views/TelaD'
import TelaE from '../views/TelaE'




const Drawer = createDrawerNavigator()



export default props => {
   


    return (<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} >
        <Drawer.Screen name="TelaA" component={TelaA} options={{ headerShown: true }} />
        <Drawer.Screen name="TelaB" component={TelaB}
            options={({ navigation }) => {
                return (
                    {
                        headerShown: true,
                        headerLeft: () => (
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                            >
                                <Icon style={{ paddingLeft: 10 }} name="arrow-left" size={26} color="black" />
                            </TouchableOpacity>
                        )

                    }
                )
            }} />
        <Drawer.Screen name="TelaC" component={TelaC} 
         options={({ navigation }) => {
            return (
                {
                    headerShown: true,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Icon style={{ paddingLeft: 10 }} name="arrow-left" size={26} color="black" />
                        </TouchableOpacity>
                    )

                }
            )
        }}
        />
        <Drawer.Screen name="TelaD" component={TelaD} options={{ headerShown: true }} />
        <Drawer.Screen name="TelaE" component={TelaE} options={{ headerShown: true }} />
    </Drawer.Navigator>)

}


