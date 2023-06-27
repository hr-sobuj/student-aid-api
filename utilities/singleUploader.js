// external import
const multer = require('multer');
const path = require('path');
const createError = require('http-errors');

function uploader(subfolderPath, allowedFileType, maxFileSize, errorMsg) {
    // upload dir
    // const UPLOAD_DIR1 = path.join((__dirname, `public/uploads/${subfolderPath}`));
    const UPLOAD_DIR = `${__dirname}/../public/uploads/${subfolderPath}/`;
    // console.log('upload dir', UPLOAD_DIR);

    // storage
    const storage = multer.diskStorage({
        destination(req, file, cb) {
            // console.log('storage destination', file);
            cb(null, UPLOAD_DIR);
        },
        filename(req, file, cb) {
            // console.log('storage destination', file);
            const fileExtn = path.extname(file.originalname);
            // eslint-disable-next-line operator-linebreak
            const fileName =
                file.originalname.replace(fileExtn, ' ').split(' ').join('-') + Date.now();

            cb(null, fileName + fileExtn);
        },
    });

    // multer object
    const upload = multer({
        storage,
        limits: {
            fileSize: maxFileSize,
        },
        fileFilter(req, file, cb) {
            // console.log('storage destination', file);
            if (allowedFileType.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(createError(errorMsg));
            }
        },
    });

    return upload;
}

// export module
module.exports = uploader;
