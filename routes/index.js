var express = require('express');
var User = require('../models').User;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  User.findAll()
    .then((users) => {
    res.render('sequelize', {users}); // 조회 결과(users)를 sequelize(sequelize.pug)에 전달.
    })
    .catch((err) => {
    console.log(err);
    next(err);
  });
});

// 위의 프로미스 방식을 async/await 문법으로 표현한 방식
// router.get('./', async (req, res, next) => {
//   try {
//     const users = await User.findAll();
//     res.render('sequelize', {users});
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// });

module.exports = router;
