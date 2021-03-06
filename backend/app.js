var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config({ path: path.resolve(__dirname + '/.env') });
const session = require('express-session');
const methodOverride = require('method-override');

var indexRouter = require('./routes/index');
const signUpRouter = require('./routes/signUpRouter');
const signInRouter = require('./routes/signInRouter');

const userRouter = require('./routes/userRouter');
const dashboardRouter = require('./routes/dashboardRouter');

const Auth = require('./middlewares/Auth');

var app = express();

// session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  '/fa',
  express.static(
    path.join(__dirname + '/node_modules/@fortawesome/fontawesome-free/js')
  )
);

// routes setup
app.use('/', indexRouter);
app.use('/', userRouter);
app.use('/sign-up', signUpRouter);
app.use('/sign-in', signInRouter);

app.use(Auth);
app.use('/dashboard', dashboardRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
