'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student_records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  student_records.init({
     id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
       defaultValue: UUIDV4
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
         allowNull:false
      },
      email: {
        type: DataTypes.STRING,
      allowNull:false,
      unique: true
      },
    department: {
      allowNull:false,
      type: DataTypes.STRING
    },
    
    level: {
    type: DataTypes.INTEGER,
     allowNull:false
    },
    
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {
    sequelize,
    modelName: 'student_records',
    tableName:student_records
  });
  return student_records;
};
