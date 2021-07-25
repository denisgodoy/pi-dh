const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

module.exports = {
  limits: { fileSize: 2 * 1024 * 1024 },
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  },
};
