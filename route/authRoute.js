const express = require('express');
const authGuard = require('express-auth-guard');
const signInUser = require('../controller/auth/signinController');
const signUpUser = require('../controller/auth/signupController');
const updateUserAvatar = require('../controller/auth/updateUserAvatar');
const updateUserEmail = require('../controller/auth/updateUserEmail');
const updateUserInfo = require('../controller/auth/updateUserInfo');
const updateUserPass = require('../controller/auth/updateUserPass');
const authDocuments = require('../middlewares/auth/authDocuments');
const authAvatar = require('../middlewares/auth/authAvatar');
const { authEmail, authEmailHandler } = require('../middlewares/auth/authEmail');
const { authPass, authPassHandler } = require('../middlewares/auth/authPass');
const { authValidator, authErrorHandler } = require('../middlewares/auth/authValidators');
const updateUserDocument = require('../controller/auth/updateUserDocuments');
const getUser = require('../controller/auth/getUser');
const updatePost = require('../controller/auth/updatePost');
const updateDonate = require('../controller/auth/updateDonate');
const getAllUsers = require('../controller/auth/getAllUsers');
const updateReceive = require('../controller/auth/updateReceive');

const route = express.Router();

// eslint-disable-next-line no-lone-blocks

// sign in
route.post('/signin', signInUser);

// sign up
route.post('/signup', signUpUser);
// route.post('/signup', authValidator, authErrorHandler, signUpUser);

// update user info 
route.put('/update-info/:id',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'),updateUserInfo);

// update donate
route.put('/update-donate/:id',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'),updateDonate);

// update receive
route.put('/update-receive/:id',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'),updateReceive);

// update user post 
route.put('/update-post/:id',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'),updatePost);

// update user pass 
route.put('/update-pass/:id',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'),authPass,authPassHandler,updateUserPass);

// update user email address
route.put('/update-email/:id',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'),authEmail,authEmailHandler,updateUserEmail);

// update user avatar
route.put('/update-avatar/:id',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'),authAvatar,updateUserAvatar);

// update user document
route.put('/update-documents/:id',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'),authDocuments,updateUserDocument);

// get one user
route.get('/user/:id',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'),getUser);

// get all user
route.get('/users',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'),getAllUsers);

// exports
module.exports = route;
