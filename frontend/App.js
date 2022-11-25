import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { COLORS } from './src/core/COLORS'
import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import { useState, useEffect, useRef } from 'react'
import { Platform } from 'react-native'


import {
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Matches,
  League,
  Teams,
  Team,
  MatchDetails,
  LeagueFixtures,
  TableScreen,
  TopScores
} from './src/screens'


const Stack = createStackNavigator()

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {

  const [expoPushToken, setExpoPushToken] = useState('')
  const [notification, setNotification] = useState(false)
  const notificationListener = useRef()
  const responseListener = useRef()

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token))

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification)
    })

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response)
    })

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current)
      Notifications.removeNotificationSubscription(responseListener.current)
    }
  }, []);

  
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
          <Stack.Screen options={({route}) =>({headerShown: true,id:route.params.id, title: route.params.title ,headerStyle: { backgroundColor: COLORS.primaryColor },headerTintColor: "white"})}
            name="League" component={League}/>
          <Stack.Screen options={({route}) =>({headerShown: true,league_id:route.params.league_id, title: route.params.title ,headerStyle: { backgroundColor: COLORS.primaryColor },headerTintColor: "white"})}
            name="Teams" component={Teams}/>
          <Stack.Screen options={({route}) =>({headerShown: true,team_id: route.params.team_id,title: route.params.title,headerStyle: { backgroundColor: COLORS.primaryColor },headerTintColor: "white"})}
            name="Team" component={Team}/>
          <Stack.Screen options={({route}) =>({headerShown: true,headerStyle: { backgroundColor: COLORS.primaryColor },headerTintColor: COLORS.secondaryColor})}
            name="MatchDetails" component={MatchDetails}/>
          <Stack.Screen options={({route}) =>({headerShown: true,league_id:route.params.league_id,title: route.params.title,headerStyle: { backgroundColor: COLORS.primaryColor },headerTintColor: "white"})}
            name="LeagueFixtures" component={LeagueFixtures}/>
          <Stack.Screen options={({route}) =>({headerShown: true,league_id:route.params.league_id,title: route.params.title,headerStyle: { backgroundColor: COLORS.primaryColor },headerTintColor: "white"})}
            name="TableScreen" component={TableScreen}/>
          <Stack.Screen options={({route}) =>({headerShown: true,league_id:route.params.league_id,title: route.params.title,headerStyle: { backgroundColor: COLORS.primaryColor },headerTintColor: "white"})}
            name="TopScores" component={TopScores}/>  
        </Stack.Navigator>
        
      </NavigationContainer>
    </Provider>
  )
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  })
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'Test',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!')
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications')
  }

  return token
}