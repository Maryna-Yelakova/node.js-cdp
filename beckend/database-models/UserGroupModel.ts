const user_group = (sequelize, DataTypes) => {
    const UserGroup = sequelize.define('user_group', {
        group_id: DataTypes.STRING,
        user_id: DataTypes.STRING
    });

    UserGroup.associate = models => {
        UserGroup.belongsTo(models.User, {foreignKey: 'user_id'}); //The "through" parameter defines the name of the join table that gets created.
        UserGroup.belongsTo(models.Group, {foreignKey: 'group_id'}) //No changes occur to the users or groups tables!
    };

    return UserGroup;
};

export default user_group;