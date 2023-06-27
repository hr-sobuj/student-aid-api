const bcrypt = require('bcrypt');
const AuthModel = require('../../models/AuthModel');

// add new
async function signUpUser(req, res) {
    console.log(req.body);
    // password hash
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    // user object
    const newUser = new AuthModel({
        ...req.body,
        password: hashPassword,
    });

    // save user
    try {
        const result = await newUser.save();
        if (result) {
            res.status(200).json({
                msg: 'Registration Successfull!',
            });
        } else {
            res.status(500).json({
                msg: 'Registration Failed!',
            });
        }
    } catch (err) {
        res.status(500).json({
            errors: {
                common: {
                    msg: 'Unknown error occured!',
                },
            },
        });
    }
}

// export
module.exports = signUpUser;
