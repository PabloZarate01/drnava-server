const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model');
const UserToken = require('../models/userToken.model')
//GET ALL USERS
exports.findAllUsers = async (req, res, next) => {
    await User.find()
    .then(users => {
        res.status(200).json(users)
    }).catch(err => {
        res.status(400).json({err:err})
    });
}
//USERP ROFILE BY USERNAME
exports.findByUsername_user = async (req, res, next) =>{
    await User.find({userName : req.params.userName})
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        res.status(400).json({err})
    });
};
//USERP ROFILE BY ID
exports.findById_user = async (req, res, next) =>{
    await User.findById({_id : req.params.userId})
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        res.status(400).json({err})
    });
};
//LOGIN AND REGISTER  (Bellow)
//SIGNIN
exports.signin_user = async (req, res, next) =>{
    console.log(req.body);
    const { userName, password } = req.body;
    if(!userName || !password){
        res.status(203).json({message:"Rellena los campos"});
    }else
    User.findOne({userName})
     .then(user =>{
         console.log("found",user)
        if(!user){
                console.log('UserNotFound');
                res.status(203).json({
                    message : "Usuario o contraseña incorreactos"
                });
        }else
        bcrypt.compare(password, user.password, (err, response) => {
            console.log('Password compare...'.black.bgCyan)
            if(response){
                const token = jwt.sign(
                    {
                        userName : user.userName,
                        email : user.email
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    }
                    );
                console.log("Login Success".green.bgBlack)
                const newUserToken = new UserToken({
                    userId : user._id,
                    userToken : token
                })
                newUserToken.save()
                 .then(result => {
                    console.log("SavedJWT",result);
                    res.status(200).json({
                        message : "Login Success!!!",
                        token,
                        user : {
                            userId:user._id,
                            name:user.name,
                            lastName:user.lastName,
                            userName : user.userName,
                            email : user.email
                        }
                    });
                 })
            }else if(!response){
                console.log('Password doesnt match'.bgRed);
                res.status(203).json({
                    message : "Usuario o contraseña incorrectos"
                });
            }else if(err){ 
                console.log("password compare error".bgRed)
                res.status(500).json({
                    errorPwC:err
                })
                console.log("Error to compare password")
            }
        });
    });
}
//EDIT
exports.editUser = async (req, res, next) => {
    const { userId } = req.params;
    await User.findByIdAndUpdate(userId, req.body, {new : true})
    .then( updatedUser => {
        res.status(200).json({message : "Editado exitosamente",updatedUser})
    })
    .catch( err => {
        res.status(500).json({err})
    })
}
//SINGUP
exports.signup_user = async (req, res, next) =>{
    console.log("Body>>", req.body)
    const { name, lastName, userName, email, password} = req.body;
    User.find({ userName: userName})
    .exec()
    .then(userN => {
        if (userN.length >= 1) {
            returnres.status(203).json({
                message: "Username exists"
            });
        }else {
            User.find({ email: email})
            .exec()
            .then(userEmail =>{
            if (userEmail.length >= 1) {
                return res.status(202).json({
                    message: "Email exists"
                });
                }else {
                    bcrypt.hash(password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            message : "SERVER ERROR",
                            error: err
                    });
                    }else {
                        const user = new User({
                            name,
                            lastName,
                            userName,  
                            email,
                            password: hash
                        });
                        user.save()
                        .then(result => {
                            console.log(result);
                            res.status(200).json({
                            message: "User created, now sign in"
                            });
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(500).json({
                            error: err
                            });
                        });
                    }
                    });
                }     
            })  
        }
    });
}
