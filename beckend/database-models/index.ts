import sequelize from  './connection';

const models = {
    User: sequelize.import('./UserModel'),
    Group: sequelize.import('./GroupModel'),
    UserGroup: sequelize.import('./UserGroupModel')
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export default models;