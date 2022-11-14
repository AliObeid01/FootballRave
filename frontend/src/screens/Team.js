import * as React from 'react'
import { StyleSheet,View } from 'react-native'
import { COLORS } from '../core/COLORS'
import Card from '../components/Card'

export default function Team() {

return (
    
  <View style={styles.container} >
    <Card title="Overview" icon='preview'/>
    <Card title="Table" icon='table'/>
    <Card title="Fixture" icon='soccer-field'/>
    <Card title="Players" icon='users'/>
    <Card title="Trophies" icon='trophy'/>       
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