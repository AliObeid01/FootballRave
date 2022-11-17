import * as React from 'react'
import { useEffect, useState } from "react"
import { StyleSheet, ScrollView ,View } from 'react-native'
import { COLORS } from '../core/COLORS'
import LeagueMatchCard from '../components/LeagueMatchCard'
import MatchCard from '../components/MatchCard'
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function LeagueFixtures({route}) {

const [fixtures, setFixtures] = useState([]);
const league_id = route.params.league_id;
console.log(league_id)
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
        
              if(fix.status=='FT'){
                return (
                <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
                <LeagueMatchCard name={fix.date.substr(0,10)} screenName='League' />    
                <MatchCard time={fix.goals.home+'-'+fix.goals.away} screenName='MatchDetails' team1={fix.teams.home.name} team2={fix.teams.away.name} team1Avatar={{uri:fix.teams.home.logo}} team2Avatar={{uri:fix.teams.away.logo}}/>
                </View>
                )
              }
                return <MatchCard time={fix.date.substr(11,5)+' '+fix.timezone} screenName='MatchDetails' team1={fix.teams.home.name} team2={fix.teams.away.name} team1Avatar={{uri:fix.teams.home.logo}} team2Avatar={{uri:fix.teams.away.logo}}/>
            })}    
      
    </ScrollView>
    
  )
}
