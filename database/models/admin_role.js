'use strict';
module.exports = (sequelize, DataTypes) => {
  var admin_role = sequelize.define('admin_role', {}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return admin_role;
};