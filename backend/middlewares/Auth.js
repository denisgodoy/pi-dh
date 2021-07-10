const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

function auth(req, res, next) {
  const token = req.session.userToken;
  if (!token) {
    console.log('No token');
    return res.redirect('/sign-in');
  }
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.redirect('/sign-in');
  }
}

module.exports = auth;