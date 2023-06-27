const AuthModel = require("../../models/AuthModel");

async function getAllUsers(req, res, next) {
    try {
        const users = await AuthModel.find().select("-password");
        // console.log(user);
        if (users) {
            res.status(200).json({
                users
            })
        }
    } catch (error) {
        next(error);
    }
}

module.exports=getAllUsers;
