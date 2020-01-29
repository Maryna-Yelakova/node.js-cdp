import { User } from '../../models/User';
import userService from '../../services/user-service';

export const userHandler = {
    getUsers: (req, res) => {
        const data = userService.getUsers();
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(400).send('Bad Request');
        }
    },
    getUserById: (req, res) => {
        const { id } = req.params;
        const user = userService.getUserById(id);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(400).send('Bad Request');
        }
    },
    setUser: (req, res) => {
        const data: User = req.body;
        userService.addUser(data);
        if (data) {
            res.status(200).send(`${data.login} user has been created successfully`);
        } else {
            res.status(400).send('Bad Request');
        }
    },
    editUser: (req, res) => {
        const data = req.body;
        const { id } = req.params;
        userService.editUser(id, data);
        if (data && id) {
            res.status(200).send(`${data.login} user has been updated successfully`);
        } else {
            res.status(400).send('Bad Request');
        }
    },
    deleteUser: (req, res) => {
        const { id } = req.params;
        userService.deleteUser(id);
        if (id) {
            res.status(200).send(`user has been deleted successfully`);
        } else {
            res.status(400).send('Bad Request');
        }
    }

};
