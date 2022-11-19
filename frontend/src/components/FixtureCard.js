import * as React from 'react'
import { Text,StyleSheet,View } from 'react-native'
import { COLORS } from '../core/COLORS'
import { Avatar } from "react-native-elements"

const FixtureCard = (props) => {
  return (
    <View style={styles.fixture} >
     <Avatar  size="small" rounded source={props.league}/>
     <Text style={{color: COLORS.secondaryColor}}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    fixture: {
    height: 50,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondaryColor
}
})

export default FixtureCard