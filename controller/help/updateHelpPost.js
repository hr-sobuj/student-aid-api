const bcrypt = require('bcrypt');
const HelpModel = require('../../models/HelpModel');

// update new
async function updateHelpPost(req, res) {
    // console.log("tags",req.body);
    try {
     
        await HelpModel.findOneAndUpdate({ _id: req.params.id },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    amount: req.body.amount,
                    status: req.body.status,
                    tags:req.body.tags
                }
                
            },
            {
                new: false,
                useFindAndModify: false,
                upsert:true,
            },
            (err) => {
                if (err) {
                    res.status(500).json({
                        error: "There was a server side error!",
                    });
                } else {
                    res.status(200).json({
                        message: "Post was updated successfully!",
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
module.exports = updateHelpPost;
