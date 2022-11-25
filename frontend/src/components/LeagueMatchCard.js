import * as React from 'react'
import { Text,StyleSheet,TouchableOpacity } from 'react-native'
import { COLORS } from '../core/COLORS'
import { Avatar } from "react-native-elements"
import { useNavigation } from '@react-navigation/native'

const LeagueMatchCard = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity delayPressIn={70} style={styles.league} onPress={() => navigation.navigate(props.screenName,{title: props.name})}>
        <Avatar  size="small" rounded source={props.path}/>
        <Text style={{color: COLORS.secondaryColor, marginLeft: 10}}>{props.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
league: {
    height: 50,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondaryColor
}
})

export default LeagueMatchCard