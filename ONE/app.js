var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');//导入路由里的文件
var usersRouter = require('./routes/users');

var app = express();


//app.set(router);//导出路由










// view engine setup
app.set('views', path.join(__dirname, 'views'));//引入文件路径
//app.set("views",__dirname,+"/views");
//app.set('view engine', 'jade');
//app.engine("ejs",require("jade").__express);
app.set('view engine', 'ejs');//引入模板引擎


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//文件静态托管

app.use('/', indexRouter);
app.use('/users', usersRouter);
//相当于 app.use('/',require('./routes/index'));？报错？



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
