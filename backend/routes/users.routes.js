const {Router} = require('express');
const {getLeagues,getLeagueTeams,getLeagueFixtures} = require('../controllers/user.controller');
const authUserMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.get('/leagues', authUserMiddleware, getLeagues);
router.post('/teams', authUserMiddleware, getLeagueTeams);
router.post('/league_fixtures', authUserMiddleware, getLeagueFixtures);

module.exports = router;
