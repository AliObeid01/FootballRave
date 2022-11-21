import * as React from 'react'
import { StyleSheet,View,Text } from 'react-native'
import { COLORS } from '../core/COLORS'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function Matches() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function LineUp() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Squad() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function Transfers() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Statistics() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function LastMatches() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Team() {

return (
    
  <Tab.Navigator  screenOptions={{
    tabBarActiveTintColor: COLORS.secondaryColor,
    tabBarLabelStyle: { fontSize: 12 },
    tabBarItemStyle: { width: 140,height:50},
    tabBarStyle: { backgroundColor: COLORS.primaryColor },
    tabBarIndicatorStyle:{backgroundColor:COLORS.secondaryColor},
    //tabBarScrollEnabled:'true'
  }}>
    <Tab.Screen name="matches" component={Matches} />
    <Tab.Screen name="lineup" component={LineUp} />
    <Tab.Screen name="squad" component={Squad} />
    <Tab.Screen name="transfer" component={Transfers} />
    <Tab.Screen name="statistics" component={Statistics} />
    <Tab.Screen name="Last 5 matches" component={LastMatches} />
  </Tab.Navigator>
  )
}