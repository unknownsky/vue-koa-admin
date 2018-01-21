'use strict';
module.exports = (sequelize, DataTypes) => {
  var admin_user = sequelize.define('admin_user', {}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return admin_user;
};