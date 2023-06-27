const bcrypt = require('bcrypt');
const AuthModel = require('../../models/AuthModel');

// update new
async function updateReceive(req, res) {
    console.log("receive",req.body.receive)
    try {
        const result=AuthModel.findByIdAndUpdate({ _id: req.params.id },
            {
                $addToSet:{
                    receive:req.body.receive,
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
                        msg:err
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
        // console.log(result);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

// export
module.exports = updateReceive;
