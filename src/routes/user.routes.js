const { Router } = require('express');
const router = Router();
//authcheck
const verifyAuth = require('../middlewares/verifyAuth');
//CONTROLLERS
const UserController = require('../controllers/user.controllers');

//GetUsers
router.get('/', UserController.findAllUsers);

//GetUserByUSERNAME
router.get('/:userName', UserController.findByUsername_user);

//GetUserByID
router.get('/:userId', UserController.findById_user);

//LoginUser     (#LOGIN)
router.post('/signin', UserController.signin_user);

//CreateUser    (SIGNUP #REGISTER)
router.post('/signup', UserController.signup_user);

module.exports = router;