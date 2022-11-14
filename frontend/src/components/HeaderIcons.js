import React,{useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS } from '../core/COLORS'
import { View ,Text} from 'react-native'

export default function HeaderIcons() {
const [iconName, setIconName] = useState("md-notifications")
const [status, setFollow] = useState("Follow")
  return (
    <View flexDirection="row">
        <TouchableOpacity onPress={() => {
            if(iconName == "md-notifications" ){
             setIconName("md-notifications-off")
            }
            if(iconName == "md-notifications-off"){
             setIconName("md-notifications")
            }
        }
        }>
        <Ionicons style={{color:COLORS.secondaryColor,paddingEnd:10}}  name={iconName} size={25}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            if(status == "Follow" ){
              setFollow("UnFollow")
            }
            if(status == "UnFollow"){
              setFollow("Follow")
            }
          }
          }>
          <Text style={{color:COLORS.secondaryColor,paddingEnd:10,fontSize: 15}}>{status}</Text>
        </TouchableOpacity>
    </View>
  )
}
