import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../core/COLORS'
import Card from '../components/Card'

export default function League() {

return (
    
  <View style={styles.container} >
    <Card title="Table" icon='table'/>
    <Card screenName='Teams' title="Teams" icon='team'/>
    <Card title="Matches" icon='soccer-field'/>
    <Card title="News" icon='newspaper-outline'/>
    <Card title="Seasons" icon='trophy'/>      
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