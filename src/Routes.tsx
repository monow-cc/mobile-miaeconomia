import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";

import Login from "./components/Login";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

const RootStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
