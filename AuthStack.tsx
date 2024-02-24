import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import { StartScreen, LoginScreen, RegisterScreen, ResetPasswordScreen, Dashboard } from "./src/screens";
import CreateGroup from "./src/screens/CreateGroup/CreateGroup";
import { Provider } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "./src/store/store";
const Stack = createStackNavigator();
function AuthStack() {
  const isUser = useSelector((state: RootState) => state.AuthSlice.isUser);

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isUser ? "CreateGroup" : "StartScreen"}
          screenOptions={{
            headerShown: false,
          }}
        >
          {isUser ? (
            <>
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="CreateGroup" component={CreateGroup} />
            </>
          ) : (
            <>
              <Stack.Screen name="StartScreen" component={StartScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default AuthStack;
