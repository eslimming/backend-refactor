//coje toda la info en el archivo .env y las mueve a las variables de entorno
require('dotenv').config();
const conf = require("config.json");

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: conf.DB_PORT,
    dbUser: conf.DB_USER,
    dbPassword: conf.DB_PASSWORD,
    dbHost: conf.DB_HOST,
    dbPort: conf.DB_PORT,
    dbName: conf.DB_NAME,
    yamlAbsolutePath: process.env.YAML_ABSOLUTE_PATH
}



const config2 = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    yamlAbsolutePath: process.env.YAML_ABSOLUTE_PATH
}

module.exports = config;