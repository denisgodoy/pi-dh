const admin = require('firebase-admin');

const serviceAccount = require('../database/config/firebase-key.json');
const BUCKET = 'elevel-34eed.appspot.com';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadFirebase = (req, res, next) => {
  if (!req.file) return next();

  const avatar = req.file;

  console.log(avatar);

  const avatarName = Date.now() + '.' + avatar.originalname.split('.').pop();

  const file = bucket.file('avatar/' + avatarName);

  const stream = file.createWriteStream({
    metadata: {
      contentType: avatar.mimetype,
    },
  });

  stream.on('error', (e) => {
    console.error(e);
  });

  stream.on('finish', async () => {
    await file.makePublic();
    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/avatar/${avatarName}`;
    console.log(req.file.firebaseUrl);
    next();
  });

  stream.end(avatar.buffer);
};

module.exports = uploadFirebase;
