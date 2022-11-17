import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../core/COLORS'
import Card from '../components/Card'

export default function MatchDetails() {

return (
    
  <View style={styles.container} >
    <Card title="Overview" icon='preview'/>
    <Card title="Table" icon='table'/>
    <Card title="Lineup" icon='linechart'/>
    <Card title="H2H" icon='users'/>
    <Card title="Injuries" icon='user-injured'/>       
  </View>
    
  )
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