import * as React from 'react'
import { Text,StyleSheet, Image,TouchableOpacity } from 'react-native'
import { COLORS } from '../core/COLORS'
import { useNavigation } from '@react-navigation/native'

const TeamCard = (props) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity delayPressIn={70} style={styles.card_template} onPress={() => navigation.navigate(props.screenName,{title: props.name,team_id: props.team_id})}>
          <Image style={styles.card_image} source={props.path}/> 
          <Text style={styles.card_title} >{props.name}</Text> 
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card_template:{
    flexDirection: 'column',
    width: '30%',
    margin: 5,
    borderRadius:10,
    borderWidth:0.5,
    borderColor:'white',
    backgroundColor:COLORS.primaryColor,
  },
  card_image: {
    width: '100%',
    height: 100,
    borderRadius:10,
    resizeMode: "contain",
  },
  card_title: {
    color: COLORS.secondaryColor,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize:13,
    fontWeight:"bold",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    height:30,
    backgroundColor:COLORS.primaryColor
  }
})

export default TeamCard