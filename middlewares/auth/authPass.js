// external import
const { check, validationResult } = require('express-validator');
const createError = require('http-errors');
const AuthModel = require('../../models/AuthModel');

const authPass = [
    check('password')
        .isStrongPassword()
        .withMessage(
            'Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol',
        ),
];
// error handler
const authPassHandler = (req, res, next) => {
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
    authPass,
    authPassHandler,
};
