import * as React from 'react'
import { useEffect, useState } from "react"
import { ScrollView,View,Text,StyleSheet } from 'react-native'
import { COLORS } from '../core/COLORS'
import { Avatar } from "react-native-elements"
import FixtureCard from '../components/FixtureCard'
import MatchCard from '../components/MatchCard'
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function Matches({route}) {
  const [fixtures, setFixtures] = useState([]);
  const team_id=route.params.team_id
  const data={
    team_id   
  }  
  useEffect(() => {
    const getFixtures= async ()=>{
    const token = await AsyncStorage.getItem('@token')
    axios({
        method: "POST",
        data,
        url: `http://192.168.1.5:5000/user/team_fixtures`,
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
      <FixtureCard name={new Date(fix.date.substr(0,10)).toDateString()} league={{uri:fix.logo}}/>    
      <MatchCard time={fix.goals.home+'-'+fix.goals.away} screenName='MatchDetails' team1={fix.teams.home.name} team2={fix.teams.away.name} team1Avatar={{uri:fix.teams.home.logo}} team2Avatar={{uri:fix.teams.away.logo}}/>
      </View>
      )
    }
    else if(fix.status=='NS'&& new Date(fix.date.substr(0,10))>new Date('2022-11-01')){
      return (
      <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
      <FixtureCard name={new Date(fix.date.substr(0,10)).toDateString()} league={{uri:fix.logo}}/>    
      <MatchCard time={fix.date.substr(11,5)+' '+fix.timezone} screenName='MatchDetails' team1={fix.teams.home.name} team2={fix.teams.away.name} team1Avatar={{uri:fix.teams.home.logo}} team2Avatar={{uri:fix.teams.away.logo}}/>
      </View>
      )
    }
    else if(fix.status=='TBD'){
      return (
      <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
      <FixtureCard name={new Date(fix.date.substr(0,10)).toDateString()+' '+'(Time to be Determined)'} league={{uri:fix.logo}}/>    
      <MatchCard time={fix.date.substr(11,5)+' '+fix.timezone} screenName='MatchDetails' team1={fix.teams.home.name} team2={fix.teams.away.name} team1Avatar={{uri:fix.teams.home.logo}} team2Avatar={{uri:fix.teams.away.logo}}/>
      </View>
      )
    }
    return (
      <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
      <FixtureCard name={new Date(fix.date.substr(0,10)).toDateString()+' '+'(Postpone)'} league={{uri:fix.logo}}/>    
      <MatchCard time={fix.date.substr(11,5)+' '+fix.timezone} screenName='MatchDetails' team1={fix.teams.home.name} team2={fix.teams.away.name} team1Avatar={{uri:fix.teams.home.logo}} team2Avatar={{uri:fix.teams.away.logo}}/>
      </View>
      )

  })}       
  </ScrollView>    
)
}

function LineUp() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Squad({route}) {
  const [squads, setSquad] = useState([]);
  const team_id=route.params.team_id
  const data={
    team_id   
  }  
  useEffect(() => {
    const getSquad= async ()=>{
    const token = await AsyncStorage.getItem('@token')
    axios({
        method: "POST",
        data,
        url: `http://192.168.1.5:5000/user/team_squad`,
        headers:{
        "Authorization" : "Bearer " +token

        }
    }).then((res) => {
      setSquad(res.data.data);
    });
    }
    getSquad();
  }, []);

  return(
  <ScrollView style={{backgroundColor:COLORS.InputColor}}>
    {squads.map((squad) => {
    return (
      <View style={styles.row}>
        <Avatar  size="small" rounded source={{uri:squad.photo}}/>
        <Text style={styles.rowText}>{squad.name}</Text>
        <Text style={styles.rowText}>{squad.position}</Text>
      </View>
      );
      })
    }
  </ScrollView>
  )
}

function Transfers() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
function Statistics() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function LastMatches() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Team({route}) {
  const team_id = route.params.team_id;
return (
    
  <Tab.Navigator  screenOptions={{
    tabBarActiveTintColor: COLORS.secondaryColor,
    tabBarLabelStyle: { fontSize: 12 },
    tabBarItemStyle: { width: 140,height:50},
    tabBarStyle: { backgroundColor: COLORS.primaryColor },
    tabBarIndicatorStyle:{backgroundColor:COLORS.secondaryColor},
    //tabBarScrollEnabled:'true'
  }}>
    <Tab.Screen name="matches" component={Matches} initialParams={{team_id}} />
    <Tab.Screen name="squad" component={Squad} initialParams={{team_id}}/>
    <Tab.Screen name="transfer" component={Transfers} />
    <Tab.Screen name="statistics" component={Statistics} />
    <Tab.Screen name="Last 5 matches" component={LastMatches} />
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: COLORS.primaryColor,
    height: 50,
    flexDirection: "row",
    justifyContent: 'space-between',
    borderRadius:15,
    padding:10,
    margin:5
  },
  rowText: {
    flex: 1, 
    fontSize: 14,
    color: COLORS.secondaryColor,
    textAlign: 'center',
    marginStart:4,
    marginTop:4
  },
});