/**
 * 시퀄라이즈는 알아서 테이블의 기본키를 연결하므로(이 코드에서는 id 칼럼) 적어줄 필요가 없다.
 * sequelize.define() 메소드로 테이블명과 각 칼럼의 스펙을 입력한다.
 * MySQL 테이블과 칼럼 내용이 일치해야 정확하게 대응된다.
 * 
 * [자료형]
 * MySQL        sequelize
 * -----------------------
 * VARCHAR      STRING
 * INT          INTEGER
 * TINYINT      BOOLEAN
 * DATETIME     DATE
 * 
 * allowNull은 NOT NULL과 동일
 * unique는 UNIQUE과 동일
 * defaultValue는 기본값을 의미
 * DataTypes.NOW는 SQL의 now()와 동일
 * 
 * define 메소드의 세번째 인자는 테이블 옵션이다.
 * timestamps 속성의 값이 true면 시퀄라이즈는 createdAt과 updateAt 칼럼을 추가한다.
 */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        name : {
            type : DataTypes.STRING(20),
            allowNull : false,
            unique : true,
        },
        age : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
        },
        married : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
        },
        comment : {
            type : DataTypes.TEXT,
            allowNull : true,
        },
        created_at : {
            type : DataTypes.DATE,
            allowNull : false,
            defaultValue : DataTypes.NOW,
        },
    }, {
        timestamps : false,
    });
};