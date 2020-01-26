import Sequelize from 'sequelize';

const sequelize = new Sequelize("postgres://postgres:Vitalii19@localhost/Users", {
    dialect: 'postgres'
});

const models = {
    User: sequelize.import('./UserModel')
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export { sequelize };
export default models;