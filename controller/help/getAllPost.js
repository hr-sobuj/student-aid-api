const HelpModel = require("../../models/HelpModel");

async function getAllPost(req, res, next) {
    try {
        const PerPage = 10;
        let page = req.params.page >= 1 ? req.params.page : 1;
        page = page - 1

        const posts = await HelpModel.find()
            // .limit(PerPage)
            // .skip(PerPage * page)
            .sort({
                createdAt: "asc",
            });

        if (posts) {
            res.status(200).json({
                posts,
            });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = getAllPost;
