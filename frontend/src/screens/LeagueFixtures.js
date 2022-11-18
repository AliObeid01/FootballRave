import * as React from 'react'
import { useEffect, useState } from "react"
import { ScrollView ,View } from 'react-native'
import { COLORS } from '../core/COLORS'
import FixtureCard from '../components/FixtureCard'
import MatchCard from '../components/MatchCard'
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

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
        url: `http://192.168.1.50:5000/user/league_fixtures`,
        headers:{
        "Authorization" : "Bearer " +token

        }
    }).then((res) => {
        setFixtures(res.data.data);
    });
    }
    getFixtures();
}, []);

return (  
    <ScrollView style={{backgroundColor:COLORS.InputColor}}>
      {fixtures.map((fix) => {
        //console.log(new Date(fix.date.substr(0,10))<new Date('2022-11-01'))
        if(fix.status=='FT'){
        return (
        <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
        <FixtureCard name={new Date(fix.date.substr(0,10)).toDateString()}/>    
        <MatchCard time={fix.goals.home+'-'+fix.goals.away} screenName='MatchDetails' team1={fix.teams.home.name} team2={fix.teams.away.name} team1Avatar={{uri:fix.teams.home.logo}} team2Avatar={{uri:fix.teams.away.logo}}/>
        </View>
        )
      }
      else if(fix.status=='NS'&& new Date(fix.date.substr(0,10))>new Date('2022-11-01')){
        return (
        <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
        <FixtureCard name={new Date(fix.date.substr(0,10)).toDateString()}/>    
        <MatchCard time={fix.date.substr(11,5)+' '+fix.timezone} screenName='MatchDetails' team1={fix.teams.home.name} team2={fix.teams.away.name} team1Avatar={{uri:fix.teams.home.logo}} team2Avatar={{uri:fix.teams.away.logo}}/>
        </View>
        )
      }
      else if(fix.status=='TBD'){
        return (
        <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
        <FixtureCard name={new Date(fix.date.substr(0,10)).toDateString()+' '+'(Time to be Determined)'}/>    
        <MatchCard time={fix.date.substr(11,5)+' '+fix.timezone} screenName='MatchDetails' team1={fix.teams.home.name} team2={fix.teams.away.name} team1Avatar={{uri:fix.teams.home.logo}} team2Avatar={{uri:fix.teams.away.logo}}/>
        </View>
        )
      }
      return (
        <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
        <FixtureCard name={new Date(fix.date.substr(0,10)).toDateString()+' '+'(Postpone)'}/>    
        <MatchCard time={fix.date.substr(11,5)+' '+fix.timezone} screenName='MatchDetails' team1={fix.teams.home.name} team2={fix.teams.away.name} team1Avatar={{uri:fix.teams.home.logo}} team2Avatar={{uri:fix.teams.away.logo}}/>
        </View>
        )

    })}       
    </ScrollView>    
  )
}
