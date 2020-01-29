import { User } from '../models/User';

const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        user_id: DataTypes.STRING,
        login: DataTypes.STRING,
        password: DataTypes.STRING,
        age: DataTypes.INTEGER,
        isDeleted: DataTypes.BOOLEAN
    });

    User.findById = (id: string) => User.findOne({
            where: { id: id },
        });

    User.addUser = async (user: User) => {
        await User.create(user);
    };

    User.getUsers = async () => {
        return await User.findAll();
    };

    User.editUser = async (id: string, data: User) => {
        await User.update(data, {
            where: {
                id: id
            }
        });
    };

    User.deleteUser = async id => {
        await User.destroy({
            where: {
                id: id
            }
        });
    };

    return User;
};

export default user;
