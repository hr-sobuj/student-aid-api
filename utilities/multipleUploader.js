// external imports
const multer = require('multer');
const path = require('path');
const createError = require('http-errors');

function uploader(
    subfolder_path,
    allowed_file_types,
    max_file_size,
    max_number_of_files,
    error_msg
) {
    // File upload folder
    const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}/`;

    // define the storage
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, UPLOADS_FOLDER);
        },
        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalname);
            const fileName = `${file.originalname
                .replace(fileExt, '')
                .toLowerCase()
                .split(' ')
                .join('-')}-${Date.now()}`;

            cb(null, fileName + fileExt);
        },
    });

    // preapre the final multer upload object
    const upload = multer({
        storage,
        limits: {
            fileSize: max_file_size,
        },
        fileFilter: (req, file, cb) => {
            if (req.files.length > max_number_of_files) {
                cb(createError(`Maximum ${max_number_of_files} files are allowed to upload!`));
            } else if (allowed_file_types.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(createError(error_msg));
            }
        },
    });

    return upload;
}

module.exports = uploader;
