const AuthModel = require('../../models/AuthModel');

// update user document
async function updateUserDocument(req, res) {
    try {
        let attachments = null;
        if (req.files && req.files.length > 0) {
            attachments = [];

            req.files.forEach((file) => {
                attachments.push(file.filename);
            });
        }

        const result = await AuthModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                $push: { attachments: attachments },
            },
            { upsert: true, new: true }
        );

        // Add a delay to ensure that the file is fully processed and cached before sending the response
        setTimeout(() => {
            res.status(200).json({
                message: "Information was updated successfully!",
                result
            });
        }, 1000); // Change the delay time as needed
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

// export
module.exports = updateUserDocument;
