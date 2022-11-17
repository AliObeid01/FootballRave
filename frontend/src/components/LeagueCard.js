import * as React from 'react'
import { Text,StyleSheet, Image,TouchableOpacity } from 'react-native'
import { COLORS } from '../core/COLORS'
import { useNavigation } from '@react-navigation/native'

const LeagueCard = (props) => {
  const navigation = useNavigation();
  return (
    
   <TouchableOpacity delayPressIn={70} style={styles.card_template} onPress={() => navigation.navigate(props.screenName,{title: props.name,id:props.id})}>
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
    borderColor:COLORS.secondaryColor,
    backgroundColor:"white",
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
    fontSize:13,
    fontWeight:"bold",
    borderRadius:10,
    backgroundColor:COLORS.primaryColor
  }
})

export default LeagueCard