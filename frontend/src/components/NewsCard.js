import React from 'react'
import {View,TouchableOpacity,Text,Image,StyleSheet} from 'react-native'
import { COLORS } from '../core/COLORS'
import { Avatar } from "react-native-elements"
import { useNavigation } from '@react-navigation/native'

const NewsCard = (props) => {
  const navigation = useNavigation();
  return ( 
    <TouchableOpacity delayPressIn={70} style={styles.newsCon} onPress={() => navigation.push(props.screenName,{title: 'News'})}>
        <Image style={styles.newsImage} source={props.path} />
        <View style={styles.newsDetails}>
            <Text style={styles.newsText}>Some boring news that nobody checks about small teams like arsenal</Text>
            <View style={styles.sourceCon}>
                <Avatar size="small" rounded source={require('../assets/logo.png')}/>
                <Text style={styles.sourceDetails}>Source Name 22-10-2022 08:00 PM</Text>
            </View>
        </View>
    </TouchableOpacity>     
    )
}

const styles = StyleSheet.create({
newsCon: {
    height: 120,
    borderRadius:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    marginLeft:5,
    marginRight:5,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: COLORS.primaryColor,
},
newsImage: {
    width: '45%',
    height:100,
    resizeMode: 'contain',
},
newsDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 10,
},
newsText: {
    flex: 1,
    textAlign: 'left',
    fontSize: 12,
    color: COLORS.secondaryColor,
},
sourceCon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
},
sourceIcon: {
    width: '5%',
    height: 13,
    resizeMode: 'contain',
},
sourceDetails: {
    marginLeft: 10,
    textAlign: 'left',
    fontSize: 10,
    color: COLORS.secondaryColor,
},
})

export default NewsCard