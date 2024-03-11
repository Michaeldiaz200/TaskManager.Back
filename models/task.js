'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Tag)
    }
  }
  Task.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    UserId: DataTypes.UUID,
    TagId: DataTypes.UUID,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    dateEnd: DataTypes.DATE,
    state:DataTypes.ENUM("Pendiente","En Progreso", "Completada"),
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};