const {Router} = require('express');
const {getleagues,getleagueTeams} = require('../controllers/user.controller');
const authUserMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.get('/leagues', authUserMiddleware, getleagues);
router.post('/teams', authUserMiddleware, getleagueTeams);

module.exports = router;
