function userInfo(req, res, next) {
  res.locals.userInfo = req.user;
  next();
}

module.exports = userInfo;
