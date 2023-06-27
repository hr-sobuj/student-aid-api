const bcrypt = require('bcrypt');
const AuthModel = require('../../models/AuthModel');

// update new
async function updateUserInfo(req, res) {

    try {
        const result = await AuthModel.findByIdAndUpdate({ _id: req.params.id },
            {
                $set: {
                    name: req.body.name,
                    address: req.body.address,
                    phone: req.body.phone,
                    nid: req.body.nid,
                    varsity: req.body.varsity,
                    bkash:req.body.bkash,
                    archive:req.body.archive,
                    fund_collection:req.body.fund_collection,
                    status:req.body.status,
                }
            },
            {
                new: true,
                useFindAndModify: false
            },
            (err) => {
                if (err) {
                    res.status(500).json({
                        error: "There was a server side error!",
                    });
                } else {
                    // console.log(result);
                    // res.status(200).json({
                    //     message: "Information was updated successfully!",
                    //     result
                    // });
                }
            }

        ).clone().then((result)=>{
            res.status(200).json({
                        message: "Information was updated successfully!",
                        result
                    });
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

// export
module.exports = updateUserInfo;
