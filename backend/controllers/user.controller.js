const axios = require("axios");

const getleagues = async (res) => {

  const leagues = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
    headers: {
      'X-RapidAPI-Key': '8cdff61333mshda0c85114bfdbdep18ff1ejsn7e52e5f6effe',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  const league=[];
  await axios.request(leagues).then(function (response) {
    for(i=0;i<response.data.response.length;i++){
      let id=response.data.response[i].league.id;
      let name=response.data.response[i].league.name;
      let logo=response.data.response[i].league.logo;
      league.push({id,name,logo});
    }
  }).catch(function (error) {
      console.error(error);
  });
  
  res.json({data:league});
}

const getleagueTeams = async (req,res) => {
  
  const standings = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
    params: {season: '2022', league: req.body.league_id},
    headers: {
      'X-RapidAPI-Key': '8cdff61333mshda0c85114bfdbdep18ff1ejsn7e52e5f6effe',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  const team=[];
  await axios.request(standings).then(function (response) {
    for(i=0;i<response.data.response[0].league['standings'][0].length;i++){
      let id=response.data.response[0].league['standings'][0][i].team.id;
      let name=response.data.response[0].league['standings'][0][i].team.name;
      let logo=response.data.response[0].league['standings'][0][i].team.logo;
      team.push({id,name,logo})
    }
  }).catch(function (error) {
      console.error(error);
  });
  
  res.json({data:team});
}

module.exports = {
  getleagues,
  getleagueTeams,
}
