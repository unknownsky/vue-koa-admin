'use strict';
module.exports = (sequelize, DataTypes) => {
  var admin_permission = sequelize.define('admin_permission', {}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return admin_permission;
};