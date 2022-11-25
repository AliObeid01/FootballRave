import * as React from 'react'
import { Text, StyleSheet,TouchableOpacity } from 'react-native'
import { COLORS } from '../core/COLORS'
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'


const Card = (props) => {
  const navigation = useNavigation();
  if (props.icon ==='table') {    
    return (    
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(props.screenName,{title: props.title,league_id:props.id})}>
          <AntDesign style={styles.text} name={props.icon} size={50} />
          <Text style={styles.text}>{props.title}</Text>
     </TouchableOpacity> 
    )
  }else if(props.icon ==='linechart'){
    return (    
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(props.screenName,{title: props.title,league_id:props.id})}>
          <AntDesign style={styles.text} name={props.icon} size={50} />
          <Text style={styles.text}>{props.title}</Text>
     </TouchableOpacity> 
    )
  }else if(props.icon ==='soccer-field'){
    return (    
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(props.screenName,{title: props.title,league_id:props.id})}>
          <MaterialCommunityIcons style={styles.text} name={props.icon} size={50} />
          <Text style={styles.text}>{props.title}</Text>
     </TouchableOpacity> 
    )
  }else if(props.icon ==='trophy'){
    return (    
      <TouchableOpacity style={styles.card}>
          <Entypo style={styles.text} name={props.icon} size={50} />
          <Text style={styles.text}>{props.title}</Text>
     </TouchableOpacity> 
    )
  }else if(props.icon ==='preview'){
    return (    
      <TouchableOpacity style={styles.card}>
          <MaterialIcons style={styles.text} name={props.icon} size={50} />
          <Text style={styles.text}>{props.title}</Text>
     </TouchableOpacity> 
    )
  }else if(props.icon ==='linechart'){
    return (    
      <TouchableOpacity style={styles.card}>
          <AntDesign style={styles.text} name={props.icon} size={50} />
          <Text style={styles.text}>{props.title}</Text>
     </TouchableOpacity> 
    )
  }
  else if(props.icon ==='users'){
    return (    
      <TouchableOpacity style={styles.card}>
          <Entypo style={styles.text} name={props.icon} size={50} />
          <Text style={styles.text}>{props.title}</Text>
     </TouchableOpacity> 
    )
  }
  else if(props.icon ==='user-injured'){
    return (    
      <TouchableOpacity style={styles.card}>
          <FontAwesome5 style={styles.text} name={props.icon} size={50} />
          <Text style={styles.text}>{props.title}</Text>
     </TouchableOpacity> 
    )
  }
  return (    
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(props.screenName,{title: props.title,league_id:props.id})}>
        <AntDesign style={styles.text} name={props.icon} size={50} />
        <Text style={styles.text}>{props.title}</Text>
   </TouchableOpacity> 
  )

}

const styles = StyleSheet.create({
card:{
    backgroundColor: COLORS.primaryColor,
    flexDirection: 'column',
    width: '45%',
    height:140,
    margin: 5,
    borderRadius:10,
    borderWidth:0.5,
    borderColor:'white',
},
text:{
    textAlign: 'center',
    fontWeight:'bold',
    color:COLORS.secondaryColor,
    padding:20,
},

})

export default Card