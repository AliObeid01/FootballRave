const {Router} = require('express');
const {getleagues} = require('../controllers/user.controller');
const authUserMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.get('/leagues', authUserMiddleware, getleagues);

module.exports = router;
