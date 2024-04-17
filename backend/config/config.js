module.exports = {
  "development": {
    "username": `${process.env.POSTGRE_USERNAME}`,
    "password": `${process.env.POSTGRE_PASSWORD}`,
    "database": `${process.env.POSTGRE_DB_NAME}`,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": `${process.env.POSTGRE_USERNAME}`,
    "password": `${process.env.POSTGRE_PASSWORD}`,
    "database": `${process.env.POSTGRE_DB_NAME}`,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": `${process.env.POSTGRE_USERNAME}`,
    "password": `${process.env.POSTGRE_PASSWORD}`,
    "database": `${process.env.POSTGRE_DB_NAME}`,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
