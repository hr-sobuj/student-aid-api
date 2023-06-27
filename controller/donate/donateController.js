const DonateModel = require('../../models/DonateModel');

async function donateController(req, res) {
    const createDonate=new DonateModel({
        ...req.body
    });
    try {
        const result=await createDonate.save();
        if (result) {
            res.status(200).json({
                msg: 'Donated!',
                result,
            });
        } else {
            res.status(500).json({
                msg: 'Failed!',
            });
        }
    } catch (error) {
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
module.exports = donateController;
