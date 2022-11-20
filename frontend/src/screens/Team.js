import * as React from 'react'
import { StyleSheet,View,Text } from 'react-native'
import { COLORS } from '../core/COLORS'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


export default function Team() {

return (
    
  <Tab.Navigator  screenOptions={{
    tabBarActiveTintColor: COLORS.secondaryColor,
    tabBarLabelStyle: { fontSize: 12 },
    tabBarItemStyle: { width: 140,height:50},
    tabBarStyle: { backgroundColor: COLORS.primaryColor },
    tabBarIndicatorStyle:{backgroundColor:COLORS.secondaryColor},
    tabBarScrollEnabled:'true'
  }}>
    <Tab.Screen name="matches" component={HomeScreen} />
    <Tab.Screen name="lineup" component={SettingsScreen} />
    <Tab.Screen name="squad" component={HomeScreen} />
    <Tab.Screen name="transfer" component={SettingsScreen} />
    <Tab.Screen name="statistics" component={HomeScreen} />
    <Tab.Screen name="Last 5 matches" component={SettingsScreen} />
  </Tab.Navigator>
  )
}
