'use strict';
module.exports = function(sequelize, DataTypes) {
  var TodoList = sequelize.define('TodoList', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        TodoList.hasMany(models.TodoItem)
      }
    }
  });
  return TodoList;
};