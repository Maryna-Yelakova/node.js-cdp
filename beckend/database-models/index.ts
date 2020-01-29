import sequelize from  './connection';

const models = {
    User: sequelize.import('./UserModel')
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export default models;