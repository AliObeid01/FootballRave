import React from 'react';
import { StyleSheet, View,ScrollView,Text} from 'react-native';
import { Avatar } from "react-native-elements"
import { COLORS } from '../core/COLORS'
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { Table, TableWrapper, Row, Rows} from 'react-native-table-component';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TopScores({route}) {
    const [TopScores, setTopScores] = useState([]);
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
            url: `http://192.168.1.50:5000/user/TopScores`,
            headers:{
            "Authorization" : "Bearer " +token

            }
        }).then((res) => {
            setTopScores(res.data.data);
        });
        }
        getTopScores();
    }, []);
    const Data= []
    {TopScores.map((score) => {
        Data.push([score])
    })} 
    const CONTENT = {
        tableHead: ['Top Scores'],
        tableData: Data,    
    };
    
    return (
        <ScrollView>
    <View style={styles.container}>
    <Table>
        <Row
        data={CONTENT.tableHead}
        //flexArr={[2,1,1]}
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
                <Text style={styles.rowText}>{score.goals} <Ionicons name='football-outline' size={13} /></Text>
                
            </View>
        )
    })} 
        </TableWrapper>
    </Table>
    </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10,backgroundColor: COLORS.InputColor},
  head: { height: 40, backgroundColor: COLORS.primaryColor },
  wrapper: {backgroundColor: COLORS.primaryColor },
  text: { textAlign: 'center',color:COLORS.secondaryColor },
  row: {
    marginHorizontal: 15,
    marginTop: 5,
    height: 50,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 1, 
  },
  rowText: {
    flex: 1, 
    fontSize: 14,
    color: COLORS.secondaryColor,
    textAlign: 'center',
  },
});