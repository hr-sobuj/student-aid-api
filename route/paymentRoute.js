const express = require('express');
const authGuard = require('express-auth-guard');
const paymentCancel = require('../controller/payment/paymentCancel');
const paymentFail = require('../controller/payment/paymentFail');
const paymentNotification = require('../controller/payment/paymentNotification');
const paymentRequest = require('../controller/payment/paymentRequest');
const paymentSuccess = require('../controller/payment/paymentSuccess');


const route = express.Router();

// eslint-disable-next-line no-lone-blocks
// authGuard('ib1V67itbqVaQEVA1VjT24GrhiYb3mNQ')

// payment-request 
route.post('/payment-request', paymentRequest);

// payment-notification 
route.post("/payment-notification", paymentNotification);

// payment-success 
route.post("/payment-success", paymentSuccess);

// payment-fail 
route.post("/payment-fail", paymentFail);

// payment-cancel 
route.post("/payment-cancel", paymentCancel);

// exports
module.exports = route;
