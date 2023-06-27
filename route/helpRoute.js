const express = require('express');
const authGuard = require('express-auth-guard');
const getAllPost = require('../controller/help/getAllPost');
const getPost = require('../controller/help/getPost');
const helpController = require('../controller/help/helpController');
const updateHelpPost = require('../controller/help/updateHelpPost');


const route = express.Router();

// eslint-disable-next-line no-lone-blocks

// help post
route.post('/post',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'), helpController);

// update post
route.put('/post/update/:id',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'), updateHelpPost);

// get all post
route.get('/post',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'), getAllPost);

// get specific post
route.get('/spost/:id',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'), getPost);

// exports
module.exports = route;
