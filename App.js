import React from "react";
import { Text, View, Image, Button, ScrollView, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import landingpage from "./Page/landingpage";
import homepage from "./Page/homepage";
import categorypage from "./Page/categorypage";
import quizpage from "./Page/quizpage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="landingpage"
          component={landingpage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="homepage"
          component={homepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="categorypage"
          component={categorypage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="quizpage"
          component={quizpage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
