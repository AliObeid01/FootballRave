import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Table, TableWrapper, Row, Rows} from 'react-native-table-component';
import { COLORS } from '../core/COLORS'
import { URL } from '../core/axiosUrl'
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"

export default function BasicTable({route}) {
    
    const [standings, setStandings] = useState([]);
    const league_id = route.params.league_id;
    const data={
        league_id   
    }  
    useEffect(() => {
        const getStandings= async ()=>{
        const token = await AsyncStorage.getItem('@token')
        axios({
            method: "POST",
            data,
            url: `${URL.ip}/league_standings`,
            headers:{
            "Authorization" : "Bearer " +token

            }
        }).then((res) => {
            setStandings(res.data.data);
        });
        }
        getStandings();
    }, []);
    
    const Data= []
    {standings.map((stand) => {
        Data.push([stand.rank,stand.name,stand.played,stand.win,stand.draw,stand.lose,stand.gd,stand.points])
    })} 
    
    const CONTENT = {
        tableHead: ['#','Team', 'PL', 'W', 'D','L', 'GD', 'Pts'],
        tableData: Data,    
    };
    
    return (
    <View style={styles.container}>
    <Table borderStyle={{ borderWidth: 1,borderColor:COLORS.InputColor }}>
        <Row
        data={CONTENT.tableHead}
        flexArr={[1,4]}
        style={styles.head}
        textStyle={styles.headertext}
        />
        <TableWrapper style={styles.wrapper}>
        <Rows
        data={CONTENT.tableData}
        flexArr={[1,4]}
        style={styles.row}
        textStyle={styles.text}
        />
        </TableWrapper>
    </Table>
    </View>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10,backgroundColor: COLORS.InputColor},
  head: { height: 40, backgroundColor: COLORS.primaryColor },
  headertext:{textAlign: 'center',color: COLORS.secondaryColor},
  wrapper: { flexDirection: 'row',backgroundColor: COLORS.primaryColor },
  row: { height: 28 },
  text: {paddingLeft:5, color:'white' },
});
