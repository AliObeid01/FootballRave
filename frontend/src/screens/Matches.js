import * as React from 'react'
import { ScrollView, View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../core/COLORS'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import NewsCard from '../components/NewsCard'
import LeagueCard from '../components/LeagueCard'
import LeagueMatchCard from '../components/LeagueMatchCard'
import MatchCard from '../components/MatchCard'



const Tab = createBottomTabNavigator()

export default function Matches() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        if (route.name === 'Matches') {
          return <MaterialCommunityIcons style={{color: focused ? COLORS.secondaryColor : COLORS.placeholder}} name='soccer-field' size={25} />
        }else if(route.name === 'Leagues'){
          return <Entypo style={{color: focused ? COLORS.secondaryColor : COLORS.placeholder}} name='trophy' size={25} />
        }else if(route.name === 'Following'){
          return <Entypo style={{color: focused ? COLORS.secondaryColor : COLORS.placeholder}} name='star' size={25} />
        }else if(route.name === 'News'){
          return <Ionicons style={{color: focused ? COLORS.secondaryColor : COLORS.placeholder}} name='newspaper-outline' size={25} />
        }
        return <MaterialIcons style={{color: focused ? COLORS.secondaryColor : COLORS.placeholder}} name='batch-prediction' size={25} />
      },

      tabBarActiveTintColor: COLORS.secondaryColor,
      tabBarInactiveTintColor: COLORS.placeholder,
      tabBarStyle:{backgroundColor:COLORS.primaryColor,height:60},
      tabBarLabelStyle:{fontSize: 13,paddingBottom:4},
      headerStyle: {backgroundColor:COLORS.primaryColor},
      headerTintColor:  COLORS.secondaryColor
  })}>

    </Tab.Navigator>
  )
}

