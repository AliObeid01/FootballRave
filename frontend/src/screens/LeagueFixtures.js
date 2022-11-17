import * as React from 'react'
import { StyleSheet, ScrollView ,View } from 'react-native'
import { COLORS } from '../core/COLORS'
import LeagueMatchCard from '../components/LeagueMatchCard'
import MatchCard from '../components/MatchCard'


export default function LeagueFixtures() {

return (
    
    <ScrollView style={{backgroundColor:COLORS.InputColor}}>
      <View style={{marginTop: 10,marginLeft:10,marginRight:10,marginBottom:10,borderRadius: 10,backgroundColor: COLORS.primaryColor,}}>
        <LeagueMatchCard name='La Liga' screenName='League' path={require('../assets/laliga.png')}/>
        <MatchCard time='10:00 pm' screenName='MatchDetails' team1='Real Madrid' team2='Barcelona' team1Avatar={require('../assets/real.png')} team2Avatar={require('../assets/Barcelona.jpg')}/>
        <MatchCard time='10:00 pm' screenName='MatchDetails' team1='Real Madrid' team2='Barcelona' team1Avatar={require('../assets/real.png')} team2Avatar={require('../assets/Barcelona.jpg')}/>
      </View>
    </ScrollView>
    
  )
}
