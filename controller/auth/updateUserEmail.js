const bcrypt = require('bcrypt');
const AuthModel = require('../../models/AuthModel');

// update 
async function updateUserEmail(req, res) {

    try {
        const result = await AuthModel.findByIdAndUpdate({ _id: req.params.id },
            {
                $set: {
                    email: req.body.email,
                },
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
module.exports = updateUserEmail;
