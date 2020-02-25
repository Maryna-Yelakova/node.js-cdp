import * as userService from  '../../services/user-service';

export const userHandler = {
    async getUsers(req, res) {
        const list = await userService.getUsers();
        if (list) {
            res.status(200).send(list);
        } else {
            res.status(400).send('Bad Request');
        }
    },
    async getUserById(req, res) {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(400).send('Bad Request');
        }
    },
    async createUser(req, res) {
        try {
            const data = req.body;
            await userService.createUser(data);
            res.status(200).send(`${data.login} user has been created successfully`);
        } catch (err) {
            res.status(400).send(`Bad Request: ${err}`);
        }
    },
    async editUser(req, res) {
        try {
            const data = req.body;
            const { id } = req.params;
            await userService.editUser({ id, data });
            res.status(200).send(`${data.login} user has been updated successfully`);
        } catch (err) {
            res.status(400).send(`Bad Request: ${err}`);
        }
    },
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            await userService.deleteUser(id);
            res.status(200).send(`user has been deleted successfully`);
        } catch (err) {
            res.status(400).send(`Bad Request: ${err}`);
        }
    },
    async getUserGroups(req, res) {
        const { id } = req.params;
        console.log(id)
        const groups = await userService.getUserGroupsById(id);
        if (groups) {
            res.status(200).send(groups);
        } else {
            res.status(400).send('Bad Request');
        }
    },
    async addUserGroup(req, res) {
        try {
            const { id } = req.params;
            const { groupId } = req.body;
            await userService.addUserGroup({ groupId, userId: id });
            res.status(200).send(`${groupId} group to user ${id} has been added successfully`);
        } catch (err) {
            res.status(400).send(`Bad Request: ${err}`);
        }
    }

};
