import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from '../screens/login';
import Planos from "../screens/planos";
import Gym from "../screens/gym";
import Cadastro from '../screens/cadastro';

import Home from '../screens/home';

const Tab = createBottomTabNavigator();

export default function Rotas() {
   return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "white",
          tabBarLabelStyle: {
            width: "100%",
            flex: 1,
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 21,
            paddingTop: 21,
            backgroundColor: "#f23333",
          },
          tabBarStyle: { width: "100%", height: 60, lineHeight: 21 },
          tabBarIconStyle: {
            display: "none",
          },
          headerShown: false 
        }}
        >
            <Tab.Screen name="Login" component={Login}></Tab.Screen>
            <Tab.Screen name="Cadastro" component={Cadastro}></Tab.Screen>
            <Tab.Screen name="Planos" component={Planos}></Tab.Screen>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Gym" component={Gym}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    ) 
}
