import * as React from 'react'
import { useEffect, useState } from "react"
import { ScrollView,View,Text,StyleSheet,ActivityIndicator } from 'react-native'
import { COLORS } from '../core/COLORS'
import { Avatar } from "react-native-elements"
import { Table, TableWrapper, Row} from 'react-native-table-component'
import FixtureCard from '../components/FixtureCard'
import MatchCard from '../components/MatchCard'
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { URL } from '../core/axiosUrl'

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
        url: `${URL.ip}/team_fixtures`,
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
        url: `${URL.ip}/team_squad`,
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
  <ScrollView style={{backgroundColor:COLORS.InputColor,paddingTop:5}}>
    {squads.map((squad) => {
    return (
      <View style={styles.squadrow}>
        <Avatar  size="small" rounded source={{uri:squad.photo}}/>
        <Text style={styles.squadText}>{squad.name}</Text>
        <Text style={styles.squadText}>{squad.position}</Text>
      </View>
      )
      })
    }
  </ScrollView>
  )
}

function Transfers({route}) {
  const [transfers, setTransfers] = useState([]);
  const team_id=route.params.team_id
  const data={
    team_id   
  }  
  useEffect(() => {
    const getTransfers= async ()=>{
    const token = await AsyncStorage.getItem('@token')
    axios({
        method: "POST",
        data,
        url: `${URL.ip}/team_transfers`,
        headers:{
        "Authorization" : "Bearer " +token

        }
    }).then((res) => {
      setTransfers(res.data.data);
    })
    }
    getTransfers()
  }, []);
 
  const CONTENT = {
    In: ['Players In'],
    Out: ['Players Out'],    
   }

return(
<ScrollView style={{backgroundColor:COLORS.InputColor}}>
<View style={styles.container}>
  <Table>
    <Row
    data={CONTENT.In}
    style={styles.head}
    textStyle={styles.text}
    />
    <TableWrapper style={styles.wrapper}>
    <View >
    {transfers.map((transfer) => {
     if(transfer.player_out_id!=team_id){
     return (
      <View style={styles.row}>
        <Avatar  size="small" rounded source={{uri:transfer.player_out_logo}}/>
        <Text style={styles.rowText}>{transfer.name}</Text>
        <Text style={styles.typeText}>{transfer.type}</Text>
      </View>
      )
    } 
    })}
    </View>
    </TableWrapper>
  </Table>
  </View>
  <View style={styles.container}>
  <Table>
    <Row
    data={CONTENT.Out}
    style={styles.head}
    textStyle={styles.text}
    />
    <TableWrapper style={styles.wrapper}>
    <View >
    {transfers.map((transfer) => {
     if(transfer.player_out_id==team_id){
     return (
        <View style={styles.row}>
          <Avatar  size="small" rounded source={{uri:transfer.player_in_logo}}/>
          <Text style={styles.rowText}>{transfer.name}</Text>
          <Text style={styles.typeText}>{transfer.type}</Text>
        </View>
      )
    } 
    })}
    </View>
    </TableWrapper>
  </Table>
  </View>
</ScrollView>
)
}

const Tab = createMaterialTopTabNavigator();

export default function Team({route}) {
  const team_id = route.params.team_id;
return (
    
  <Tab.Navigator  screenOptions={{
    tabBarActiveTintColor: "white",
    tabBarLabelStyle: { fontSize: 12 },
    tabBarItemStyle: { width: 120,height:50},
    tabBarStyle: { backgroundColor: COLORS.primaryColor },
    tabBarIndicatorStyle:{backgroundColor:COLORS.secondaryColor},
    //tabBarScrollEnabled:'true'
  }}>
    <Tab.Screen name="matches" component={Matches} initialParams={{team_id}} />
    <Tab.Screen name="squad" component={Squad} initialParams={{team_id}}/>
    <Tab.Screen name="transfer" component={Transfers} initialParams={{team_id}} />
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10,backgroundColor: COLORS.InputColor,paddingBottom:4},
  head: { height: 40, backgroundColor: COLORS.InputColor,paddingBottom:10 },
  wrapper: {backgroundColor: COLORS.primaryColor },
  text: { textAlign: 'center',color:'white',fontSize:20},
  squadrow: {
    backgroundColor: COLORS.primaryColor,
    height: 50,
    flexDirection: "row",
    justifyContent: 'space-between',
    borderRadius:15,
    padding:10,
    margin:5
  },
  squadText: {
    flex: 1, 
    fontSize: 14,
    color: COLORS.secondaryColor,
    textAlign: 'center',
    marginStart:4,
    marginTop:4
  },
  row: {
    marginTop: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  rowText: {
    flex: 1, 
    fontSize: 14,
    color: COLORS.secondaryColor,
    paddingLeft:10,
    paddingTop:5
  },
  typeText:{
    paddingLeft:10,
    color: COLORS.secondaryColor,
    paddingLeft:10,
    paddingTop:5
  },

})