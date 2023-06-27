const express = require('express');
const authGuard = require('express-auth-guard');
const donateController = require('../controller/donate/donateController');
const getDonate = require('../controller/donate/getDonate');
const updateDonate = require('../controller/donate/updateDonate');
const getPost = require('../controller/help/getPost');


const route = express.Router();

// eslint-disable-next-line no-lone-blocks

// donate 
route.post('/init',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'), donateController);

// donate update
route.put('/update/:id',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'), updateDonate);

// get donate
route.get('/:id',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'), getDonate);

// get donate info
// route.get('/:id',authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ'), getPost);

// exports
module.exports = route;
