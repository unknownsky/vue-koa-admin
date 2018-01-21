const config = require(__dirname + '/../config/index.js');

module.exports = {
  "development": {
    "username": config.mysql_username,
    "password": config.mysql_password,
    "database": config.mysql_database,
    "host": config.mysql_url,
    "dialect": "mysql"
  },
  "test": {
    "username": config.mysql_username,
    "password": config.mysql_password,
    "database": config.mysql_database,
    "host": config.mysql_url,
    "dialect": "mysql"
  },
  "production": {
    "username": config.mysql_username,
    "password": config.mysql_password,
    "database": config.mysql_database,
    "host": config.mysql_url,
    "dialect": "mysql"
  }
}
