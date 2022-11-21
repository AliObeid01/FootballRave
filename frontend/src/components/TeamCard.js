import * as React from 'react'
import { Text,StyleSheet, Image,TouchableOpacity } from 'react-native'
import { COLORS } from '../core/COLORS'
import { useNavigation } from '@react-navigation/native'

const TeamCard = (props) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity delayPressIn={70} style={styles.card_template} onPress={() => navigation.navigate(props.screenName,{title: props.name,team_id:props.team_id})}>
          <Image style={styles.card_image} source={props.path}/> 
          <Text style={styles.card_title} >{props.name}</Text> 
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card_template:{
    flexDirection: 'column',
    width: '45%',
    margin: 5,
    borderRadius:10,
    borderWidth:0.5,
    borderColor:'white',
    backgroundColor:COLORS.primaryColor,
  },
  card_image: {
    width: '100%',
    height: 150,
    borderRadius:10,
    resizeMode: "contain",
  },
  card_title: {
    color: COLORS.secondaryColor,
    textAlign: 'center',
  }
})

export default TeamCard