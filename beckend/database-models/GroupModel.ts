import { Group } from '../models/Group';

const group = (sequelize, DataTypes) => {
    const Group = sequelize.define('group', {
        name: DataTypes.STRING,
        permissions: DataTypes.ARRAY(DataTypes.STRING)
    });

    Group.findById = (id: string) => Group.findOne({
        where: { id: id },
    });

    Group.addGroup = async (group: Group) => {
        await Group.create(group);
    };

    Group.getGroups = async () => {
        return await Group.findAll();
    };

    Group.editGroup = async (id: string, data: Group) => {
        await Group.update(data, {
            where: {
                id: id
            }
        });
    };

    Group.deleteGroup = async id => {
        await Group.destroy({
            where: {
                id: id
            }
        });
    };

    Group.associate = models => {
        Group.belongsToMany(models.User, {through: 'UserGroup', foreignKey: 'group_id', as: 'employes'});
    };

    return Group;
};

export default group;
