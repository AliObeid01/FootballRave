import * as React from 'react'
import { useEffect, useState } from "react"
import {ScrollView, View,Text,ActivityIndicator} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../core/COLORS'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import LeagueCard from '../components/LeagueCard'
import FixtureCard from '../components/FixtureCard'
import MatchCard from '../components/MatchCard'
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { createStackNavigator } from '@react-navigation/stack'
import Messaging from "../screens/Messaging"
import Chat from "../screens/Chat"
import { URL } from '../core/axiosUrl'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

function MatchScreen() {

  const [liveMatches, setLiveMatches] = useState([]);

  useEffect(() => {
    const getLiveMatches= async ()=>{
      const token = await AsyncStorage.getItem('@token')
      axios({
        method: "GET",
        url: `${URL.ip}/live`,
        headers:{
          "Authorization" : "Bearer " +token
  
         }
      }).then((res) => {
        setLiveMatches(res.data.data); 
      });
    }
    getLiveMatches()
  }, []);

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
        url: `${URL.ip}/leagues`,
        headers:{
          "Authorization" : "Bearer " +token
  
         }
      }).then((res) => {
        setLeg(res.data.data); 
      });
    }
    getleagues()
  }, []);

  if(legs.length==0){
    return (
      <View style={{backgroundColor:COLORS.InputColor,height:'100%',flex: 1,justifyContent: "center"}}>
      <ActivityIndicator size="large" color={COLORS.secondaryColor} />
      </View>
    )
    }
  return (
    <ScrollView style={{backgroundColor:COLORS.InputColor}}>
    <View style={{backgroundColor:COLORS.InputColor,flexDirection: 'row',justifyContent: 'center',alignItems: 'center',flexWrap: 'wrap',height:'100%'}}>
      {legs.map((leg) => {
          return <LeagueCard id={leg.id} name={leg.name} path={{uri:leg.logo}} screenName='League'/>
      })}      
    </View>
    </ScrollView>
  )
}

function ChatScreen() {
  const Stack = createStackNavigator();
  
  return (
    <Stack.Navigator>
      <Stack.Screen name='Chat Room' component={Chat} options={() =>({headerStyle: { backgroundColor: COLORS.primaryColor },headerTintColor: 'white'})} />
      <Stack.Screen name='Messaging' component={Messaging} options={() =>({headerStyle: { backgroundColor: COLORS.primaryColor },headerTintColor: 'white'})}/>
   </Stack.Navigator>
  )
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
      <Tab.Screen name="Live Matches" component={MatchScreen} options={() =>({headerStyle: { backgroundColor: COLORS.primaryColor },headerTintColor: 'white'})} />
      <Tab.Screen name="Leagues" component={LeaguesScreen} options={() =>({headerStyle: { backgroundColor: COLORS.primaryColor },headerTintColor: 'white'})}/>
      <Tab.Screen name="ChatRoom" component={ChatScreen} options={() =>({ headerShown: false })}/>
    </Tab.Navigator>
  )
}

