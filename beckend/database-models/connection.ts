import { Sequelize } from 'sequelize';
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        dialect: 'postgres'
    },
);

export default sequelize;