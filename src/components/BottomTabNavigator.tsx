import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ScanProducts from "./ScanProducts";
import SeachProducts from "./SeachProducts";
import ShoppingCart from "./ShoppingCart";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { paddingTop: 10 },
      }}
    >
      <Tab.Screen
        name="Cadastrar"
        component={ScanProducts}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-add-circle"
              size={20}
              color={focused ? "#F00" : "#000"}
            />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Pesquisar"
        component={SeachProducts}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              size={20}
              color={focused ? "#F00" : "#000"}
            />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Lista de compras"
        component={ShoppingCart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="cart" size={20} color={focused ? "#F00" : "#000"} />
          ),
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
