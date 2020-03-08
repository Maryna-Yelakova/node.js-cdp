import models from '../database-models/index';
import { Group } from '../models/Group';
import { User } from '../models/User';

const groupService = {
    getGroups: () => models.Group.getGroups(),
    getGroupById : (id: string) => models.Group.findById(id),
    addGroup: (data: Group) => models.Group.addGroup(data),
    editGroup: (id: string, data: Group) => models.Group.editGroup(id, data),
    deleteGroup: (id: string) => models.Group.deleteGroup(id),

    getUsers: () => models.Group.findAll({include: [{model: User}]})
};

export default groupService;