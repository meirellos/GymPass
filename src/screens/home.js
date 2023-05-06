import React from 'react'

import Gym from '../screens/gym.js'
import Planos from '../screens/planos.js' 
import Cadastro from '../screens/cadastro.js' 
import Login from '../screens/login.js' 

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function Home(){
return(
    <Stack.navigator>
        <Stack.Screen name="Gym" component={Gym}></Stack.Screen>
        <Stack.Screen name="Planoss" component={Planos}></Stack.Screen>
    </Stack.navigator>
)
}