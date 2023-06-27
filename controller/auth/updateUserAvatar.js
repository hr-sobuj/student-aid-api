const AuthModel = require('../../models/AuthModel');

// add new
async function updateUserAvatar(req, res) {
    // console.log("avatar",req.files);
    // attachments 
    let attachments = null;
    if (req.files && req.files.length > 0) {
        attachments = req.files[0].filename;
    }
    const result = await AuthModel.findByIdAndUpdate({ _id: req.params.id },
        {
            $set: {
                avatar: attachments,
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
}

// export
module.exports = updateUserAvatar;