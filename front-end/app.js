var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index')
var clientRouter = require('./routes/client')
var adminRouter = require('./routes/admin')
var superadminRouter = require('./routes/superadmin')
var tokenRouter = require('./routes/token')

var app = express();
app.use(cors({
  origin: "http://localhost:8000",
  credentials: true
}))

//-------------Autenticacion y sesiones
let passport = require('./config/passport')
let session = require('express-session')
const store = new session.MemoryStore
app.use(session({
  cookie: {maxAge: 240 * 60 * 60 *1000 }, //10 dias
  store: store,
  saveUninitialized: true,
  resave: true,
  secret: 'Secret phrase for generating encrypted ID session'
}))
app.use(passport.initialize())
app.use(passport.session())
//----------------------------------------

//--------------Vistas con React
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use('/public', express.static('public'));
//-------------------------------------------

var mongoose = require('mongoose')
var mongoDB = 'mongodb://localhost:27017/payment_processor'

mongoose.connect(mongoDB, { useNewUrlParser: true })
mongoose.Promise = global.Promise
var db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("Secret phrase for generating encrypted ID session"));

app.use('/', indexRouter)
app.use('/cliente', clientRouter)
app.use('/admin', adminRouter)
app.use('/superadmin', superadminRouter)
app.use('/token', tokenRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
/*   res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; */

  // render the error page
  console.log(err)
  console.log(err.message, "Este es el error")
  /* res.status(err.status || 500).json(err.message) */
});

module.exports = app;