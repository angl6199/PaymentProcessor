var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index')

var app = express();
app.use(cors())

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)
app.use('/users', usersRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;

// Importa la configuración de la app
let appConfig = require('./configs/app');

app.listen(appConfig.express_port,() => {
  let show = 'App listening on port ' + appConfig.express_port + '! (http://localhost:' + appConfig.express_port +')';
  console.log(show);
});