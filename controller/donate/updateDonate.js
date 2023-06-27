const bcrypt = require('bcrypt');
const DonateModel = require('../../models/DonateModel');

// update new
async function updateDonate(req, res) {
    try {
     
        const result = await DonateModel.findByIdAndUpdate({ _id: req.params.id },
            {
                $set:{
                    collected: req.body.collected,
                    need: req.body.need,
                },
                $push: {
                    donors: req.body.donors
                }
                
            },
            {
                new: true,
                useFindAndModify: false,
            },
            (err) => {
                if (err) {
                    res.status(500).json({
                        error: "There was a server side error!",
                    });
                } else {
                    res.status(200).json({
                        message: "Donated successfully!",
                    });
                }
            }
        ).clone()
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

// export
module.exports = updateDonate;
