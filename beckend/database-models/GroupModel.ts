import { Group } from '../models/Group';

const group = (sequelize, DataTypes) => {
    const GroupModel = sequelize.define('group', {
        name: DataTypes.STRING,
        permissions: DataTypes.ARRAY(DataTypes.STRING)
    });

    GroupModel.findById = (id: string) => GroupModel.findOne({
        where: { id: id },
    });

    GroupModel.addGroup = async (group: Group) => {
        await GroupModel.create(group);
    };

    GroupModel.getGroups = async () => {
        return await GroupModel.findAll();
    };

    GroupModel.editGroup = async (id: string, data: Group) => {
        await GroupModel.update(data, {
            where: {
                id: id
            }
        });
    };

    GroupModel.deleteGroup = async id => {
        await GroupModel.destroy({
            where: {
                id: id
            }
        });
    };

    GroupModel.associate = models => {
        GroupModel.belongsToMany(models.User, {through: 'UserGroup', foreignKey: 'group_id', as: 'employes'});
    };

    return GroupModel;
};

export default group;
