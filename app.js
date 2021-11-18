var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {useNewUrlParser: true, useUnifiedTopology: true});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var maskRouter = require('./routes/mask');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var mask = require("./models/mask");
var resourceRouter = require('./routes/resource');

// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything 
  await mask.deleteMany();
  let instance1 = new mask({ color: "Black", price: 20, size: "L" });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  let instance2 = new mask({ color: "White and red", price: 40, size: "M" });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });
  let instance3 = new mask({ color: "Red devil", price: 50, size: "S" });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}

let reseed = true;
if (reseed) { recreateDB();}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/mask', maskRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

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
