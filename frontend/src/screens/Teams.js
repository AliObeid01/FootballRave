import * as React from 'react'
import { ScrollView,View } from 'react-native'
import { COLORS } from '../core/COLORS'
import TeamCard from '../components/TeamCard'

export default function Teams({route}) {

  //const [teams, setTeams] = useState([]);
  const league_id = route.params.league_id;
  console.log(league_id)
  // useEffect(() => {
  //   const getTeams= async ()=>{
  //     const token = await AsyncStorage.getItem('@token')
  //     axios({
  //       method: "POST",
  //       data,
  //       url: `http://192.168.1.50:5000/user/teams`,
  //       headers:{
  //         "Authorization" : "Bearer " +token
  
  //        }
  //     }).then((res) => {
  //       setTeams(res.data.data); 
  //     });
  //   }
  //   getTeams();
  // }, []);

return (
    <ScrollView style={{backgroundColor:COLORS.InputColor,height:'100%'}}>
    <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',flexWrap: 'wrap'}}>
        <TeamCard name='Man UTD' path={require('../assets/man.png')} screenName='Team'/>
        <TeamCard name='Man City' path={require('../assets/city.jpg')} screenName='Team'/>
        <TeamCard name='Arsenal' path={require('../assets/arsenal.jpg')} screenName='Team'/>
        <TeamCard name='Man UTD' path={require('../assets/man.png')} screenName='Team'/>
        <TeamCard name='Man City' path={require('../assets/city.jpg')} screenName='Team'/>
        <TeamCard name='Arsenal' path={require('../assets/arsenal.jpg')} screenName='Team'/>
        <TeamCard name='Man UTD' path={require('../assets/man.png')} screenName='Team'/>
        <TeamCard name='Man City' path={require('../assets/city.jpg')} screenName='Team'/>
        <TeamCard name='Arsenal' path={require('../assets/arsenal.jpg')} screenName='Team'/>
        <TeamCard name='Man UTD' path={require('../assets/man.png')} screenName='Team'/>
        <TeamCard name='Man City' path={require('../assets/city.jpg')} screenName='Team'/>
        <TeamCard name='Arsenal' path={require('../assets/arsenal.jpg')} screenName='Team'/>
    </View>
    </ScrollView>
  )
}
