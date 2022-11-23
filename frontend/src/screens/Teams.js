import * as React from 'react'
import { useEffect, useState } from "react"
import { ScrollView,View } from 'react-native'
import { COLORS } from '../core/COLORS'
import TeamCard from '../components/TeamCard'
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Teams({route}) {

  const [teams, setTeams] = useState([]);
  const league_id = route.params.league_id;
  const data={
    league_id   
  }  
  useEffect(() => {
    const getTeams= async ()=>{
      const token = await AsyncStorage.getItem('@token')
      axios({
        method: "POST",
        data,
        url: `http://192.168.1.2:5000/user/teams`,
        headers:{
          "Authorization" : "Bearer " +token
  
         }
      }).then((res) => {
        setTeams(res.data.data);
      });
    }
    getTeams();
  }, []);

return (
    <ScrollView style={{backgroundColor:COLORS.InputColor,height:'100%'}}>
    <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',flexWrap: 'wrap'}}>
        {teams.map((team) => {
               return <TeamCard name={team.name} path={{uri:team.logo}} screenName='Team' team_id={team.id}/>
            })}       
    </View>
    </ScrollView>
  )
}
