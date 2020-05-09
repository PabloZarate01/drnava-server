const { Router } = require('express');
const router = Router();
//authcheck
const verifyAuth = require('../middlewares/verifyAuth');
//CONTROLLERS
const UserController = require('../controllers/user.controllers');

//GetUsers
router.get('/',verifyAuth, UserController.findAllUsers);

//GetUserByUSERNAME
router.get('/:userName',verifyAuth, UserController.findByUsername_user);

//GetUserByID
router.get('/:userId',verifyAuth, UserController.findById_user);

//LoginUser     (#LOGIN)
router.post('/login', UserController.signin_user);

//CreateUser    (SIGNUP #REGISTER)
router.post('/register', UserController.signup_user);

router.post('/edit/:userId', UserController.editUser);
module.exports = router;