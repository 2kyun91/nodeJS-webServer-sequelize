var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 생성한 라우터들을 연결해준다.
var commentRouter = require('./routes/comments');
// require('./models')는 require('./models/index.js')와 같다. 
// index.js 파일은 require시 이름을 생략할 수 있다.
// 시퀄라이즈는 모델과 MySQL의 테이블을 연결해주는 역할을 한다.
var sequelize = require('./models').sequelize;

var app = express();
// 시퀄라이즈를 통해 익스프레스 앱과 MySQL을 연결한다. 
// sync() 메소드를 사용하면 서버 실행 시 알아서 MySQL과 연동된다.
sequelize.sync();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments', commentRouter);

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
