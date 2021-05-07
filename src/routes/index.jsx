import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../pages/Home";
import { Repositories } from "../pages/Repositories";

export default function Routes() {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Repositories" component={Repositories} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
