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
      let status=response.data.response[i].fixture.status.long;
      let time=response.data.response[i].fixture.status.elapsed;
      let league=response.data.response[i].league.name;
      let leaguelogo=response.data.response[i].league.logo;
      let home=response.data.response[i].teams.home.name;
      let homelogo=response.data.response[i].teams.home.logo;
      let away=response.data.response[i].teams.away.name;
      let awaylogo=response.data.response[i].teams.away.logo;
      let homegoals=response.data.response[i].goals.home;
      let awaygoals=response.data.response[i].goals.away;


      liveMatches.push({status,time,league,leaguelogo,home,homelogo,away,awaylogo,homegoals,awaygoals})
    }
  }).catch(function (error) {
      console.error(error);
  });
  
  res.json({data:liveMatches});
}

const getTeamFixtures = async (req,res) => {
  
  const fixtures = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {season: '2022', team: req.body.team_id},
    headers: {
      'X-RapidAPI-Key': '8cdff61333mshda0c85114bfdbdep18ff1ejsn7e52e5f6effe',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  const TeamFixtures=[];
  await axios.request(fixtures).then(function (response) {
    for(i=0;i<response.data.response.length;i++){
      let id=response.data.response[i].fixture.id;
      let timezone=response.data.response[i].fixture.timezone;
      let date=response.data.response[i].fixture.date;
      let status=response.data.response[i].fixture.status.short;
      let teams=response.data.response[i].teams;
      let goals=response.data.response[i].goals;
      let logo=response.data.response[i].league.logo;
      TeamFixtures.push({id,timezone,date,status,teams,goals,logo})
    }
  }).catch(function (error) {
      console.error(error);
  });
  
  res.json({data:TeamFixtures});
}

const getTeamSquad = async (req,res) => {
  
  const squad = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/players/squads',
    params: {team: req.body.team_id},
    headers: {
      'X-RapidAPI-Key': '8cdff61333mshda0c85114bfdbdep18ff1ejsn7e52e5f6effe',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  const TeamSquad=[];
  await axios.request(squad).then(function (response) {
    for(i=0;i<response.data.response[0].players.length;i++){
      let id=response.data.response[0].players[i].id;
      let name=response.data.response[0].players[i].name;
      let position=response.data.response[0].players[i].position;
      let photo=response.data.response[0].players[i].photo;

      TeamSquad.push({id,name,position,photo})
    }
  }).catch(function (error) {
      console.error(error);
  });
  
  res.json({data:TeamSquad});
}

const getTeamTransfers = async (req,res) => {
  
  const transfers = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/transfers',
    params: {team: req.body.team_id},
    headers: {
      'X-RapidAPI-Key': '8cdff61333mshda0c85114bfdbdep18ff1ejsn7e52e5f6effe',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  const TeamTransfers=[];
  await axios.request(transfers).then(function (response) {
    for(i=0;i<response.data.response.length;i++){
      let id=response.data.response[i].player.id;
      let name=response.data.response[i].player.name;
      let type=response.data.response[i].transfers[0].type;
      let player_in_name=response.data.response[i].transfers[0].teams.in.name;
      let player_in_logo=response.data.response[i].transfers[0].teams.in.logo;
      let player_out_name=response.data.response[i].transfers[0].teams.out.name;
      let player_out_logo=response.data.response[i].transfers[0].teams.out.name;
      

      TeamTransfers.push({id,name,type,player_in_name,player_in_logo,player_out_name,player_out_logo})
    }
  }).catch(function (error) {
      console.error(error);
  });
  
  res.json({data:TeamTransfers});
}


module.exports = {
  getLeagues,
  getLeagueTeams,
  getLeagueFixtures,
  getLeagueStandings,
  getLeagueTopScores,
  getLeagueTopAssists,
  getLiveMatches,
  getTeamFixtures,
  getTeamSquad,
  getTeamTransfers
}
