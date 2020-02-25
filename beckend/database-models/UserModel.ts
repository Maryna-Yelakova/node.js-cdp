import { User } from '../models/User';

const user = (sequelize, DataTypes) => {
    const UserModel = sequelize.define('user', {
        login: DataTypes.STRING,
        password: DataTypes.STRING,
        age: DataTypes.INTEGER,
        isDeleted: DataTypes.BOOLEAN
    });

    UserModel.findById = (id: string) => UserModel.findOne({
            where: { id: id }
    });

    UserModel.addUser = async (user: User) => {
        await UserModel.create(user);
    };

    UserModel.getUsers = async () => {
        return await UserModel.findAll();
    };

    UserModel.editUser = async (id: string, data: User) => {
        await UserModel.update(data, {
            where: {
                id: id
            }
        });
    };

    UserModel.deleteUser = async id => {
        await UserModel.destroy({
            where: {
                id: id
            }
        });
    };

    UserModel.associate = models => {
        UserModel.belongsToMany(models.Group, {through: 'UserGroup', foreignKey: 'userId'})
    };

    return UserModel;
};

export default user;
