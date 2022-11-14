import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { COLORS } from './src/core/COLORS'



import {
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Matches,
  League

} from './src/screens'


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
          <Stack.Screen name="Matches" component={Matches}/>
          <Stack.Screen options={({route}) =>({headerShown: true,headerRight: () => (<HeaderIcons/>), title: route.params.title ,headerStyle: { backgroundColor: COLORS.primaryColor },headerTintColor: COLORS.secondaryColor})}
            name="League" component={League}/>

        </Stack.Navigator>
        
      </NavigationContainer>
    </Provider>
  )
}
