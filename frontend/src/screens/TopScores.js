import React from 'react';
import { StyleSheet, View,ScrollView,Text} from 'react-native';
import { Avatar } from "react-native-elements"
import { COLORS } from '../core/COLORS'
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { Table, TableWrapper, Row} from 'react-native-table-component';
import Ionicons from '@expo/vector-icons/Ionicons'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { URL } from '../core/axiosUrl'

export default function TopScores({route}) {
    const [TopScores, setTopScores] = useState([]);
    const [TopAssist, setTopAssist] = useState([]);
    const league_id = route.params.league_id;
    const data={
        league_id   
    }  
    useEffect(() => {
        const getTopScores= async ()=>{
        const token = await AsyncStorage.getItem('@token')
        axios({
            method: "POST",
            data,
            url: `${URL.ip}/TopScores`,
            headers:{
            "Authorization" : "Bearer " +token

            }
        }).then((res) => {
            setTopScores(res.data.data)
        })
        }
        getTopScores()
    }, []);

    useEffect(() => {
        const getTopAssist= async ()=>{
        const token = await AsyncStorage.getItem('@token')
        axios({
            method: "POST",
            data,
            url: `${URL.ip}/TopAssists`,
            headers:{
            "Authorization" : "Bearer " +token

            }
        }).then((res) => {
            setTopAssist(res.data.data)
        })
        }
        getTopAssist()
    }, []);

    const CONTENT = {
        scores: ['Top Scores'],
        assist: ['Top Assists'],    
    }
    
    return (
    <ScrollView style={{backgroundColor:COLORS.InputColor}}>
    <View style={styles.container}>
    <Table>
        <Row
        data={CONTENT.scores}
        style={styles.head}
        textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
        {TopScores.map((score) => {
        return(
        <View style={styles.row}>
            <Avatar  size="small" rounded source={{uri:score.photo}}/>
            <Text style={styles.rowText}>{score.name}</Text>
            <Avatar  size="small" rounded source={{uri:score.logo}}/>
            <Text style={styles.scoreText}>{score.goals} <Ionicons name='football-outline' size={13} /></Text>
         </View>
        )
       })} 
        </TableWrapper>
    </Table>
    </View>

    <View style={styles.container}>
    <Table>
        <Row
        data={CONTENT.assist}
        style={styles.head}
        textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
        {TopAssist.map((assist) => {
        return(
        <View style={styles.row}>
            <Avatar  size="small" rounded source={{uri:assist.photo}}/>
            <Text style={styles.rowText}>{assist.name}</Text>
            <Avatar  size="small" rounded source={{uri:assist.logo}}/>
            <Text style={styles.scoreText}>{assist.assists} <Icon name='shoe-cleat' size={13} /></Text>
         </View>
        )
       })} 
        </TableWrapper>
    </Table>
    </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10,backgroundColor: COLORS.InputColor,paddingBottom:4},
  head: { height: 40, backgroundColor: COLORS.InputColor,paddingBottom:10 },
  wrapper: {backgroundColor: COLORS.primaryColor },
  text: { textAlign: 'center',color:'white',fontSize:20},
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
  scoreText:{
    paddingLeft:10,
    color: COLORS.secondaryColor,
    paddingLeft:10,
    paddingTop:5
  }
})
