const HelpModel = require("../../models/HelpModel");

async function getPost(req, res, next) {
    try {
        const post = await HelpModel.findOne({ _id: req.params.id });
        // console.log(user);
        if (post) {
            res.status(200).json({
                post
            })
        }
    } catch (error) {
        next(error);
    }
}

module.exports=getPost;
