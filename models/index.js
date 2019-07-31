// sequelize-cli가 자동으로 생성해주는 코드는 그래도 사용했을 때 에러가 발생한다.
// 필요없는 부분과 수정이 필요한 부분을 아래와 같이 수정한다.
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db 객체에 User,Comment 모델을 담아둔다.
// 이렇게 하면 db 객체를 require하여 모델에 접근할 수 있다.
db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

db.User.hasMany(db.Comment, {foreignKey : 'commenter', sourceKey : 'id'});
db.Comment.belongsTo(db.User, {foreignKey : 'commenter', targetKey : 'id'});

module.exports = db;