import * as React from 'react'
import { StyleSheet,View } from 'react-native'
import { COLORS } from '../core/COLORS'
import Card from '../components/Card'

export default function League({route}) {
  const id = route.params.id;
return (
  
  <View style={styles.container} >
    <Card screenName='TableScreen' title="Table" icon='table' id={id}/>
    <Card screenName='Teams' title="Teams" icon='team' id={id}/>
    <Card screenName='LeagueFixtures' title="Scored & Fixtures" icon='soccer-field' id={id}/>
    <Card screenName='TopScores' title="Statistics" icon='linechart' id={id}/>
  </View>
    
  );
}

const styles = StyleSheet.create({

container: {
    height: "100%",
    paddingTop:5,
    backgroundColor: COLORS.InputColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  }

})