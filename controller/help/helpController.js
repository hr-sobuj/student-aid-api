const HelpModel = require('../../models/HelpModel');

async function helpController(req, res) {
    console.log(req.body);
    const newPost = new HelpModel({
        ...req.body
    });
    // console.log(newPost);
    try {
        // save post 
        const result=await newPost.save();
        console.log(result);
        if (result) {
            res.status(200).json({
                msg: 'Help Post Successfull Published!',
                result,
            });
        } else {
            res.status(500).json({
                msg: 'Failed!',
            });
        }
    } catch (err) {
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
module.exports = helpController;
