import * as groupService from '../../services/group.service';

export const groupHandler = {
    async getGroups(req, res) {
        const list = await groupService.getGroups();
        if (list) {
            res.status(200).send(list);
        } else {
            res.status(400).send('Bad Request');
        }
    },
    async getGroupById(req, res) {
        const { id } = req.params;
        const user = await groupService.getGroupById(id);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(400).send('Bad Request');
        }
    },
    async createGroup(req, res) {
        try {
            const data = req.body;
            await groupService.createGroup(data);
            res.status(200).send(`${data.login} user has been created successfully`);
        } catch (err) {
            res.status(400).send(`Bad Request: ${err}`);
        }
    },
    async editGroup(req, res) {
        try {
            const data = req.body;
            const { id } = req.params;
            await groupService.editGroup({ id, data });
            res.status(200).send(`${data.login} user has been updated successfully`);
        } catch (err) {
            res.status(400).send(`Bad Request: ${err}`);
        }
    },
    async deleteGroup(req, res) {
        try {
            const { id } = req.params;
            await groupService.deleteGroup(id);
            res.status(200).send(`user has been deleted successfully`);
        } catch (err) {
            res.status(400).send(`Bad Request: ${err}`);
        }
    }
};
