import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Login from "../screens/login";
import Planos from "../screens/planos";
import Gym from "../screens/gym";
import Cadastro from "../screens/cadastro";
import Confirmacao from "../screens/confirmacao";

import Home from "../screens/home.js";

const Tab = createMaterialBottomTabNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="red"
        inactiveColor="#dedede"
        barStyle={{ backgroundColor: "#F45F52" }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Planos"
          component={Planos}
          options={{
            tabBarLabel: "Planos",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="view-list" color={color} size={26} />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
