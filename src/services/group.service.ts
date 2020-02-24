import { Group } from '../db/models/Group';

export const getGroups = () => Group.findAll();
export const getGroupById = id => Group.findByPk(id).then(user => user ? user.get() : null);
export const createGroup = data => Group.create(data);
export const editGroup = ({ data, id }) => Group.update(data, { where: { id } });
export const deleteGroup = id => Group.destroy({ where: { id } });
