require('dotenv').config()
module.exports = {
  
  "development": {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "rikolino_bd_prueba",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "3306",
    dialect: process.env.DB_DIALECT || "mysql"
  }

}
