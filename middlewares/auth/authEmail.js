// external import
const { check, validationResult } = require('express-validator');
const createError = require('http-errors');
const AuthModel = require('../../models/AuthModel');

const authEmail = [
    check('email')
        .isEmail()
        .withMessage('Your Email Address is Invalid!')
        .trim()
        .custom(async (value) => {
            try {
                const result = await AuthModel.findOne({ email: value });
                if (result) {
                    throw createError('Email already uses!');
                }
            } catch (error) {
                throw createError(error.message);
            }
        }),
];
// error handler
const authEmailHandler = (req, res, next) => {
    const error = validationResult(req);
    const mappedError = error.mapped();

    if (Object.keys(mappedError).length === 0) {
        next();
    } else {
        // response the error
        res.status(500).json({
            errors: mappedError,
        });
    }
};

// export module
module.exports = {
    authEmail,
    authEmailHandler,
};
