// external import
const { check, validationResult } = require('express-validator');
const createError = require('http-errors');
const AuthModel = require('../../models/AuthModel');

const authValidator = [
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
    check('password')
        .isStrongPassword()
        .withMessage(
            'Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol',
        ),
];
// error handler
const authErrorHandler = (req, res, next) => {
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
    authValidator,
    authErrorHandler,
};
