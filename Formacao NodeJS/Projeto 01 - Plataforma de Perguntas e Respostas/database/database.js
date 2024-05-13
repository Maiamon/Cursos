import Sequelize from "sequelize";

const connection = new Sequelize('guiaperguntas', 'root', 'treina1', {
    host: 'localhost',
    dialect: 'mysql'
});

export default connection;