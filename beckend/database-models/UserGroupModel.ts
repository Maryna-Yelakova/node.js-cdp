const user_group = (sequelize, DataTypes) => {
    const UserGroup = sequelize.define('user_group', {
        groupId: DataTypes.STRING,
        userId: DataTypes.STRING
    });

    UserGroup.associate = models => {
        UserGroup.belongsTo(models.User, {foreignKey: 'userId'}); //The "through" parameter defines the name of the join table that gets created.
        UserGroup.belongsTo(models.Group, {foreignKey: 'groupId'}) //No changes occur to the users or groups tables!
    };

    return UserGroup;
};

export default user_group;