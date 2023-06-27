const bcrypt = require('bcrypt');
const AuthModel = require('../../models/AuthModel');

// update new
async function updateDonate(req, res) {
    // console.log(req.body.donate)
    try {
        AuthModel.findByIdAndUpdate({ _id: req.params.id },
            {
                $push:{
                    donate:req.body.donate,
                }
            },
            {
                upsert: true,
                new:true
            },
            (err) => {
                if (err) {
                    res.status(500).json({
                        error: "There was a server side error!",
                    });
                } else {
                    // console.log(result);
                    res.status(200).json({
                        message: "Information was updated successfully!",
                        
                    });
                }
            }

        )
        // .clone().then((result)=>{
        //     res.status(200).json({
        //                 message: "Information was updated successfully!",
        //                 result
        //             });
        // });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

// export
module.exports = updateDonate;
