//coje toda la info en el archivo .env y las mueve a las variables de entorno
require('dotenv').config();
const postgresHost = process.env.PA_DOCKER_HOST; //? process.env.paDockerHost : process.env.DB_HOST;

//console.log(process.env);


const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: postgresHost,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    yamlAbsolutePath: process.env.YAML_ABSOLUTE_PATH
}

module.exports = config;