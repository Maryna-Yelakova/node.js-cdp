import models from '../database-models/index';
import { User } from '../models/User';

const userService = {
    getUsers: () => models.User.getUsers(),
    getUserById : (id: string) => models.User.findById(id),
    addUser: (data: User) => models.User.addUser(data),
    editUser: (id: string, data: User) => models.User.editUser(id, data),
    deleteUser: (id: string) => models.User.deleteUser(id)
};

export default userService;