const {Router} = require('express');
const {getLeagues,getLeagueTeams} = require('../controllers/user.controller');
const authUserMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.get('/leagues', authUserMiddleware, getLeagues);
router.post('/teams', authUserMiddleware, getLeagueTeams);

module.exports = router;
