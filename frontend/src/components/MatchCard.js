import * as React from 'react'
import { Text,StyleSheet,TouchableOpacity } from 'react-native'
import { COLORS } from '../core/COLORS'
import { Avatar } from "react-native-elements"
import { useNavigation } from '@react-navigation/native'

const MatchCard = (props) => {
const navigation = useNavigation()
  return (
    <TouchableOpacity delayPressIn={70} style={styles.matchCon} onPress={() => navigation.navigate(props.screenName)}>
        <Text style={styles.matchText}>{props.team1}</Text>
        <Avatar  size="small" rounded source={props.team1Avatar}/>
        <Text style={{color: COLORS.fontPrimary,padding:5}}>{props.time}</Text>
        <Avatar  size="small" rounded source={props.team2Avatar}/>
        <Text style={styles.matchText}>{props.team2}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
matchCon: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
},
matchText: {
    flex: 1, 
    fontSize: 13,
    textAlign: 'center',
    color: COLORS.fontPrimary
},
teamIcon: {
    width: '10%',
    resizeMode: 'contain',
}
})

export default MatchCard