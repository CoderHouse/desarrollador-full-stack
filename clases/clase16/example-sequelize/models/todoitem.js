'use strict';
module.exports = function(sequelize, DataTypes) {
  var TodoItem = sequelize.define('TodoItem', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        TodoItem.belongsTo(models.TodoList)
      }
    }
  });
  return TodoItem;
};