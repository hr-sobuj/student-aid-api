const AuthModel = require("../../models/AuthModel");

async function getUser(req, res, next) {
    try {
        const user = await AuthModel.findOne({ _id: req.params.id }).select("-password");
        // console.log(user);
        if (user) {
            res.status(200).json({
                user
            })
        }
    } catch (error) {
        next(error);
    }
}

module.exports=getUser;
