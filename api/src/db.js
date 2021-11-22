import initdb from './models/init-models.js'
import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    'gamebud',
    'roberto',
    'abc@123', {
    host: '192.168.0.80',
    dialect: 'mysql',
    logging: false
});

const db = initdb(sequelize);
export default db;


















