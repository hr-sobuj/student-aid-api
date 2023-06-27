const DonateModel = require("../../models/DonateModel");


async function getDonate(req, res, next) {
    try {
        const donate = await DonateModel.findOne({ _id: req.params.id });
        // console.log(user);
        if (donate) {
            res.status(200).json({
                donate
            })
        }
    } catch (error) {
        next(error);
    }
}

module.exports=getDonate;
