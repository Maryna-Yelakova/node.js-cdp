import { User } from '../db/models/User';

export const getUsers = () => User.findAll();
export const getUserById = id => User.findByPk(id).then(user => user ? user.get() : null);
export const createUser = data => User.create(data);
export const editUser = ({ data, id }) => User.update(data, { where: { id } });
export const deleteUser = id => User.destroy({ where: { id } });
export const getUserGroupsById = (id: number): Promise<[]> => User.findByPk(id, { include: ['groups'] }).then(user => user && user.groups || []);
export const addUserGroup = async ({ userId, groupId }) => {
    // @Todo: user group name instead of id
    const user = await User.findByPk(userId);
    if (user) {
        user.$add('groups', groupId);
    } else {
        throw new Error('cannot find user with such id');
    }
};