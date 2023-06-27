const uploader = require('../../utilities/multipleUploader');

function authDocuments(req, res, next) {
    const upload = uploader(
        'documents',
        ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'],
        100000000000,
        5,
        'Only .jpg, jpeg, .png, or .pdf format allowed!'
    );

    // call the middleware function
    upload.any()(req, res, (err) => {
        if (err) {
            res.status(500).json({
                errors: {
                    common: {
                        msg: err.message,
                    },
                },
            });
        } else {
            next();
        }
    });
}

module.exports = authDocuments;
