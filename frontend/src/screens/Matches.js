import * as React from 'react'
import { useEffect, useState } from "react"
import {ActivityIndicator, ScrollView, View,Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../core/COLORS'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import NewsCard from '../components/NewsCard'
import LeagueCard from '../components/LeagueCard'
import FixtureCard from '../components/FixtureCard'
import MatchCard from '../components/MatchCard'
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

function MatchScreen() {

  const [liveMatches, setLiveMatches] = useState([]);

  useEffect(() => {
    const getLiveMatches= async ()=>{
      const token = await AsyncStorage.getItem('@token')
      axios({
        method: "GET",
        url: `http://192.168.1.50:5000/user/live`,
        headers:{
          "Authorization" : "Bearer " +token
  
         }
      }).then((res) => {
        setLiveMatches(res.data.data); 
      });
    }
    getLiveMatches();
  }, [liveMatches]);

    if(liveMatches.length==0){
    return (
      <View style={{backgroundColor:COLORS.InputColor,height:'100%'}}>
      <Text style={{color:COLORS.secondaryColor,fontSize:20,textAlign:'center',marginTop:250}}>No Ongiong Matches</Text>
      </View>
    )
    }
  return (
    <ScrollView style={{backgroundColor:COLORS.InputColor}}>
      {liveMatches.map((live) => {  
      return(
        <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
        <FixtureCard name={live.league+'-'+live.status+' '+live.time+'"'} league={{uri:live.leaguelogo}}/>    
        <MatchCard time={live.homegoals+' - '+live.awaygoals} screenName='MatchDetails' team1={live.home} team2={live.away} team1Avatar={{uri:live.homelogo}} team2Avatar={{uri:live.awaylogo}}/>
        </View>
       )
     })}  
    </ScrollView>
  );
}

 function LeaguesScreen(){

  const [legs, setLeg] = useState([]);
  
  useEffect(() => {
    const getleagues= async ()=>{
      const token = await AsyncStorage.getItem('@token')
      axios({
        method: "GET",
        url: `http://192.168.1.50:5000/user/leagues`,
        headers:{
          "Authorization" : "Bearer " +token
  
         }
      }).then((res) => {
        setLeg(res.data.data); 
      });
    }
    getleagues();
  }, []);

  return (
    <ScrollView style={{backgroundColor:COLORS.InputColor}}>
    <View style={{backgroundColor:COLORS.InputColor,flexDirection: 'row',justifyContent: 'center',alignItems: 'center',flexWrap: 'wrap',height:'100%'}}>
            {legs.map((leg) => {
               return <LeagueCard id={leg.id} name={leg.name} path={{uri:leg.logo}} screenName='League'/>
            })}      
    </View>
    </ScrollView>
  );
}

function ChatScreen() {
  return (
    <View style={{backgroundColor:COLORS.InputColor,height:'100%'}}>
    <Text style={{color:COLORS.secondaryColor,fontSize:15,textAlign:'center',marginTop:250}}>Still working on this Feature it will implemented soon.Thank you for your Time</Text>
    </View>
  );
}

function PredictionScreen() {
  return (
    <ScrollView style={{backgroundColor:COLORS.InputColor}}>  
     </ScrollView>
  );
}

const Tab = createBottomTabNavigator()

export default function Matches() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        if (route.name === 'Live Matches') {
          return <MaterialCommunityIcons style={{color: focused ? COLORS.secondaryColor : COLORS.placeholder}} name='soccer-field' size={25} />
        }else if(route.name === 'Leagues'){
          return <Entypo style={{color: focused ? COLORS.secondaryColor : COLORS.placeholder}} name='trophy' size={25} />
        }else if(route.name === 'Following'){
          return <Entypo style={{color: focused ? COLORS.secondaryColor : COLORS.placeholder}} name='star' size={25} />
        }else if(route.name === 'ChatRoom'){
          return <Ionicons style={{color: focused ? COLORS.secondaryColor : COLORS.placeholder}} name='chatbubbles' size={25} />
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
      <Tab.Screen name="Live Matches" component={MatchScreen}/>
      <Tab.Screen name="Leagues" component={LeaguesScreen}/>
      <Tab.Screen name="ChatRoom" component={ChatScreen} />
      <Tab.Screen name="Prediction" component={PredictionScreen} />

    </Tab.Navigator>
  )
}

