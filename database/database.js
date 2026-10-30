const { Sequelize }= require('sequelize');

const sequelize = new Sequelize('student_management', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize; 