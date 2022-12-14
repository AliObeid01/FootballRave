const {Router} = require('express');
const {getLeagues,getLeagueTeams,getLeagueFixtures,getLeagueStandings,getLeagueTopScores,getLeagueTopAssists,getLiveMatches,getTeamFixtures,getTeamSquad,getTeamTransfers} = require('../controllers/user.controller');
const authUserMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.get('/leagues', authUserMiddleware, getLeagues);
router.post('/teams', authUserMiddleware, getLeagueTeams);
router.post('/league_fixtures', authUserMiddleware, getLeagueFixtures);
router.post('/league_standings', authUserMiddleware, getLeagueStandings);
router.post('/TopScores', authUserMiddleware, getLeagueTopScores);
router.post('/TopAssists', authUserMiddleware, getLeagueTopAssists);
router.get('/live', authUserMiddleware, getLiveMatches);
router.post('/team_fixtures', authUserMiddleware, getTeamFixtures);
router.post('/team_squad', authUserMiddleware, getTeamSquad);
router.post('/team_transfers', authUserMiddleware, getTeamTransfers);

module.exports = router;
