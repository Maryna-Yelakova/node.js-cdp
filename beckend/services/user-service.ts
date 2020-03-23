import models from '../database-models/index';

export const getUsers = () => models.User.findAll();
export const getUserById = id => models.User.findByPk(id).then(user => user ? user.get() : null);
export const getUser = login => models.User.findOne({ where: { login }}).then(user => user ? user.get() : null);
export const createUser = data => models.User.create(data);
export const editUser = ({ data, id }) => models.User.update(data, { where: { id } });
export const deleteUser = id => models.User.destroy({ where: { id } });
export const getUserGroupsById = (id: number): Promise<[]> => models.User.findByPk(id, { include: ['groups'] }).then(user => user && user.groups || []);
export const addUserGroup = async ({ userId, groupId }) => {
    // @Todo: user group name instead of id
    const user = await models.User.findByPk(userId);
    if (user) {
        user.addGroup('groups', groupId);
    } else {
        throw new Error('cannot find user with such id');
    }
};