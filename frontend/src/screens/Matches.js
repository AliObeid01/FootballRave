import * as React from 'react'
import { useEffect, useState } from "react"
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
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

function MatchScreen() {

  return (
    <ScrollView style={{backgroundColor:COLORS.InputColor}}>
      <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
        <LeagueMatchCard name='La Liga' screenName='League' path={require('../assets/laliga.png')}/>
        <MatchCard time='10:00 pm' screenName='MatchDetails' team1='Real Madrid' team2='Barcelona' team1Avatar={require('../assets/real.png')} team2Avatar={require('../assets/Barcelona.jpg')}/>
        <MatchCard time='10:00 pm' screenName='MatchDetails' team1='Real Madrid' team2='Barcelona' team1Avatar={require('../assets/real.png')} team2Avatar={require('../assets/Barcelona.jpg')}/>
      </View>
      <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
        <LeagueMatchCard name='Premier League' screenName='League' path={require('../assets/PL-Lion.png')}/>
        <MatchCard time='10:00 pm' screenName='MatchDetails' team1='Man UTD' team2='Man City' team1Avatar={require('../assets/man.png')} team2Avatar={require('../assets/city.jpg')}/>
        <MatchCard time='10:00 pm' screenName='MatchDetails' team1='Man UTD' team2='Man City' team1Avatar={require('../assets/man.png')} team2Avatar={require('../assets/city.jpg')}/>
      </View>
      <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
        <LeagueMatchCard name='Serie A' screenName='League' path={require('../assets/seriaA.jpg')}/>
        <MatchCard time='10:00 pm' screenName='MatchDetails' team1='Ac Milan' team2='Inter Milan' team1Avatar={require('../assets/milan.png')} team2Avatar={require('../assets/inter.png')}/>
        <MatchCard time='10:00 pm' screenName='MatchDetails' team1='Ac Milan' team2='Inter Milan' team1Avatar={require('../assets/milan.png')} team2Avatar={require('../assets/inter.png')}/>
      </View>
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
    <ScrollView>
    <View style={{backgroundColor:COLORS.InputColor,flexDirection: 'row',justifyContent: 'center',alignItems: 'center',flexWrap: 'wrap',height:'100%'}}>
            {legs.map((leg) => {
               return <LeagueCard id={leg.id} name={leg.name} path={{uri:leg.logo}} screenName='League'/>
            })}      
    </View>
    </ScrollView>
  );
}

function NewsScreen() {
  return (
    <ScrollView style={{backgroundColor:COLORS.InputColor}}>
      <NewsCard screenName='NewsDetails' path={require('../assets/news.jpg')}/>
      <NewsCard screenName='NewsDetails' path={require('../assets/news.jpg')}/>
      <NewsCard screenName='NewsDetails' path={require('../assets/2.jpg')}/>
    </ScrollView>
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
      <Tab.Screen name="Matches" component={MatchScreen}/>
      <Tab.Screen name="Leagues" component={LeaguesScreen}/>
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Prediction" component={PredictionScreen} />

    </Tab.Navigator>
  )
}

