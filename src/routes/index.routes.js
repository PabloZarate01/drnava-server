const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/index.controller');
const verifyAuth = require('../middlewares/verifyAuth');
router.get('/', (req, res) => {
    res.status(200).json({
        message : "WHISPME REST API (Online) LEAVE IF YOU ARE NOT A WHISPME DEVELOPER"
    })
});
//router.get('/auth', verifyAuth, UserController.findMe);

module.exports = router;