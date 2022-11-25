import * as React from 'react'
import { useEffect, useState } from "react"
import { ScrollView ,View,ActivityIndicator } from 'react-native'
import { COLORS } from '../core/COLORS'
import FixtureCard from '../components/FixtureCard'
import MatchCard from '../components/MatchCard'
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { URL } from '../core/axiosUrl'

export default function LeagueFixtures({route}) {

const [fixtures, setFixtures] = useState([]);
const league_id = route.params.league_id;

const data={
    league_id   
}  
useEffect(() => {
    const getFixtures= async ()=>{
    const token = await AsyncStorage.getItem('@token')
    axios({
        method: "POST",
        data,
        url: `${URL.ip}/league_fixtures`,
        headers:{
        "Authorization" : "Bearer " +token

        }
    }).then((res) => {
        setFixtures(res.data.data);
    });
    }
    getFixtures();
}, []);

if(fixtures.length==0){
  return (
    <View style={{backgroundColor:COLORS.InputColor,height:'100%',flex: 1,justifyContent: "center"}}>
    <ActivityIndicator size="large" color={COLORS.secondaryColor} />
    </View>
  )
  }

return (  
    <ScrollView style={{backgroundColor:COLORS.InputColor}}>
      {fixtures.map((fix) => {
        if(fix.status=='FT'){
        return (
        <View style={{marginTop: 10,marginLeft:10,marginRight:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
        <FixtureCard name={new Date(fix.date.substr(0,10)).toDateString()} league={require('../assets/logo.png')}/>    
        <MatchCard time={fix.goals.home+'-'+fix.goals.away} screenName='MatchDetails' team1={fix.teams.home.name} team2={fix.teams.away.name} team1Avatar={{uri:fix.teams.home.logo}} team2Avatar={{uri:fix.teams.away.logo}}/>
        </View>
        )
      }
      else if(fix.status=='NS'&& new Date(fix.date.substr(0,10))>new Date('2022-11-01')){
        return (
        <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
        <FixtureCard name={new Date(fix.date.substr(0,10)).toDateString()} league={require('../assets/logo.png')}/>    
        <MatchCard time={fix.date.substr(11,5)+' '+fix.timezone} screenName='MatchDetails' team1={fix.teams.home.name} team2={fix.teams.away.name} team1Avatar={{uri:fix.teams.home.logo}} team2Avatar={{uri:fix.teams.away.logo}}/>
        </View>
        )
      }
      else if(fix.status=='TBD'){
        return (
        <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
        <FixtureCard name={new Date(fix.date.substr(0,10)).toDateString()+' '+'(Time to be Determined)'} league={require('../assets/logo.png')}/>    
        <MatchCard time={fix.date.substr(11,5)+' '+fix.timezone} screenName='MatchDetails' team1={fix.teams.home.name} team2={fix.teams.away.name} team1Avatar={{uri:fix.teams.home.logo}} team2Avatar={{uri:fix.teams.away.logo}}/>
        </View>
        )
      }
      return (
        <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
        <FixtureCard name={new Date(fix.date.substr(0,10)).toDateString()+' '+'(Postpone)'} league={require('../assets/logo.png')}/>    
        <MatchCard time={fix.date.substr(11,5)+' '+fix.timezone} screenName='MatchDetails' team1={fix.teams.home.name} team2={fix.teams.away.name} team1Avatar={{uri:fix.teams.home.logo}} team2Avatar={{uri:fix.teams.away.logo}}/>
        </View>
        )

    })}       
    </ScrollView>    
  )
}
