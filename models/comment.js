// 외래키(commenter) 칼럼이 없다.
// 이 부분은 모델을 정의할 때 넣어주어도 되지만 시퀄라이즈 자체에서 관계를 따로 정의할 수 있다.
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment', {
        comment : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
        created_at : {
            type : DataTypes.DATE,
            allowNull : true,
            defaultValue : DataTypes.NOW,
        },
    }, {
        timestamps : false,
    });
};