require('dotenv').config()

module.exports = {
  "development": {
    "username": "root",
    "password": "cawetr11",
    "database": "la-vie",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "cawetr11",
    "database": "la-vie-migration",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
