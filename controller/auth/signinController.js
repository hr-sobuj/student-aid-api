const bcrypt = require('bcrypt');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const AuthModel = require('../../models/AuthModel');

async function signInUser(req, res) {
    try {
        const user = await AuthModel.findOne({ email: req.body.email });
        if (user) {
            const isValidPassword = await bcrypt.compare(req.body.password, user.password);
            // console.log(isValidPassword);
            if (isValidPassword) {
                // admin Object
                const adminObj = {
                    // eslint-disable-next-line no-underscore-dangle
                    id: user._id,
                    name: user.name,
                    email: user.email,
                };

                // generate jwt token
                const token = jwt.sign(adminObj, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRE_TOKEN,
                });

                // locals
                res.locals.loggedInUser = adminObj;

                // response
                res.status(200).json({
                    user,
                    access_token: token,
                });
            } else {
                throw new Error(createError('Passwords NOT match!'));
            }
        }
    } catch (err) {
        res.status(400).json({
            errors: {
                common: {
                    msg: err.message,
                },
            },
        });
    }
}
// export
module.exports = signInUser;
