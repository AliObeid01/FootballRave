import * as React from 'react'
import { useEffect, useState } from "react"
import { ScrollView,View,Text,StyleSheet } from 'react-native'
import { COLORS } from '../core/COLORS'
import { Avatar } from "react-native-elements"
import { Table, TableWrapper, Row} from 'react-native-table-component'
import FixtureCard from '../components/FixtureCard'
import MatchCard from '../components/MatchCard'
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

function LineUp({route}) {


  return(
  <ScrollView style={{backgroundColor:COLORS.InputColor}}>
  
  </ScrollView>
  )
  }

function Prediction({route}) {


return(
<ScrollView style={{backgroundColor:COLORS.InputColor}}>



</ScrollView>
)
}

const Tab = createMaterialTopTabNavigator();

export default function MatchDetails({route}) {
  
return (
    
  <Tab.Navigator  screenOptions={{
    tabBarActiveTintColor: COLORS.secondaryColor,
    tabBarLabelStyle: { fontSize: 12 },
    tabBarItemStyle: { width: 120,height:50},
    tabBarStyle: { backgroundColor: COLORS.primaryColor },
    tabBarIndicatorStyle:{backgroundColor:COLORS.secondaryColor},
    //tabBarScrollEnabled:'true'
  }}>
    <Tab.Screen name="LineUp" component={LineUp}/>
    <Tab.Screen name="Prediction" component={Prediction} />
  </Tab.Navigator>
  )
}
