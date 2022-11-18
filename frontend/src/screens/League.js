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
    <Card screenName='LeagueFixtures' title="Fixtures" icon='soccer-field' id={id}/>
    <Card title="Top Scores" icon='newspaper-outline'/>
  </View>
    
  );
}

const styles = StyleSheet.create({

container: {
  height: "100%",
  backgroundColor: COLORS.InputColor,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
}

});