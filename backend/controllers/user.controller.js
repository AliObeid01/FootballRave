const axios = require("axios");

const getLeagues = async (req,res) => {

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

const getLeagueTeams = async (req,res) => {
  
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

const getLeagueFixtures = async (req,res) => {
  
  const fixtures = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {season: '2022', league: req.body.league_id},
    headers: {
      'X-RapidAPI-Key': '8cdff61333mshda0c85114bfdbdep18ff1ejsn7e52e5f6effe',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  const leagueFixtures=[];
  await axios.request(fixtures).then(function (response) {
    for(i=0;i<response.data.response.length;i++){
      let id=response.data.response[i].fixture.id;
      let timezone=response.data.response[i].fixture.timezone;
      let date=response.data.response[i].fixture.date;
      let status=response.data.response[i].fixture.status.short;
      let teams=response.data.response[i].teams;
      let goals=response.data.response[i].goals;
      leagueFixtures.push({id,timezone,date,status,teams,goals})
    }
  }).catch(function (error) {
      console.error(error);
  });
  
  res.json({data:leagueFixtures});
}

const getLeagueStandings = async (req,res) => {
  
  const standings = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
    params: {season: '2022', league: req.body.league_id},
    headers: {
      'X-RapidAPI-Key': '8cdff61333mshda0c85114bfdbdep18ff1ejsn7e52e5f6effe',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  const leagueStandings=[];
  await axios.request(standings).then(function (response) {
    for(i=0;i<response.data.response[0].league['standings'][0].length;i++){
      let rank=response.data.response[0].league['standings'][0][i].rank;
      let name=response.data.response[0].league['standings'][0][i].team.name;
      let logo=response.data.response[0].league['standings'][0][i].team.logo;
      let points=response.data.response[0].league['standings'][0][i].points;
      let gd=response.data.response[0].league['standings'][0][i].goalsDiff;
      let played=response.data.response[0].league['standings'][0][i].all.played;
      let win=response.data.response[0].league['standings'][0][i].all.win;
      let draw=response.data.response[0].league['standings'][0][i].all.draw;
      let lose=response.data.response[0].league['standings'][0][i].all.lose;
      leagueStandings.push({rank,name,logo,points,gd,played,win,draw,lose})
    }
  }).catch(function (error) {
      console.error(error);
  });
  
  res.json({data:leagueStandings});
}

const getLeagueTopScores = async (req,res) => {
  
  const Scores = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
    params: {season: '2022', league: req.body.league_id},
    headers: {
      'X-RapidAPI-Key': '8cdff61333mshda0c85114bfdbdep18ff1ejsn7e52e5f6effe',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  const TopScores=[];
  await axios.request(Scores).then(function (response) {
    for(i=0;i<response.data.response.length;i++){
      let name=response.data.response[i].player.name;
      let photo=response.data.response[i].player.photo;
      let logo=response.data.response[i].statistics[0].team.logo;
      let goals=response.data.response[i].statistics[0].goals.total;

      TopScores.push({name,photo,logo,goals})
    }
  }).catch(function (error) {
      console.error(error);
  });
  
  res.json({data:TopScores});
}

const getLeagueTopAssists = async (req,res) => {
  
  const Assists = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/players/topassists',
    params: {season: '2022', league: req.body.league_id},
    headers: {
      'X-RapidAPI-Key': '8cdff61333mshda0c85114bfdbdep18ff1ejsn7e52e5f6effe',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  const TopAssits=[];
  await axios.request(Assists).then(function (response) {
    for(i=0;i<response.data.response.length;i++){
      let name=response.data.response[i].player.name;
      let photo=response.data.response[i].player.photo;
      let logo=response.data.response[i].statistics[0].team.logo;
      let assists=response.data.response[i].statistics[0].goals.assists;

      TopAssits.push({name,photo,logo,assists})
    }
  }).catch(function (error) {
      console.error(error);
  });
  
  res.json({data:TopAssits});
}

const getLiveMatches = async (req,res) => {
  
  const live = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {live: 'all'},
    headers: {
      'X-RapidAPI-Key': '8cdff61333mshda0c85114bfdbdep18ff1ejsn7e52e5f6effe',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  const liveMatches=[];
  await axios.request(live).then(function (response) {
    for(i=0;i<response.data.response.length;i++){
      let name=response.data.response[i].player.name;
      let photo=response.data.response[i].player.photo;
      let logo=response.data.response[i].statistics[0].team.logo;
      let assists=response.data.response[i].statistics[0].goals.assists;

      TopAssits.push({name,photo,logo,assists})
    }
  }).catch(function (error) {
      console.error(error);
  });
  
  res.json({data:liveMatches});
}

module.exports = {
  getLeagues,
  getLeagueTeams,
  getLeagueFixtures,
  getLeagueStandings,
  getLeagueTopScores,
  getLeagueTopAssists,
  getLiveMatches
}
