import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'


const Stack = createStackNavigator()

export default props =>
(
            <Stack.Navigator initialRouteName="TelaA"
            screenOptions={{headerShown: true}}
            >
                <Stack.Screen name="TelaA" 
                options={{title: 'Informações Iniciais'}}>
                    
                    </Stack.Screen> 
                <Stack.Screen name="TelaB">
               
                </Stack.Screen>
                <Stack.Screen name="TelaC">
                

                </Stack.Screen>
            </Stack.Navigator>
)