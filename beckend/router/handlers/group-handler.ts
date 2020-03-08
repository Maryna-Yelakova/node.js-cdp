import { Group } from '../../models/Group';
import groupService from '../../services/group-service';

export const groupHandler = {
    getGroups: (req, res) => {
        const data = groupService.getGroups().then(data => console.log(data));
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(400).send('Bad Request');
        }
    },
    getGroupById: (req, res) => {
        const { id } = req.params;
        const group = groupService.getGroupById(id);
        if (group) {
            res.status(200).send(group);
        } else {
            res.status(400).send('Bad Request');
        }
    },
    setGroup: (req, res) => {
        const data: Group = req.body;
        groupService.addGroup(data);
        if (data) {
            res.status(200).send(`${data.name} group has been created successfully`);
        } else {
            res.status(400).send('Bad Request');
        }
    },
    editGroup: (req, res) => {
        const data = req.body;
        const { id } = req.params;
        groupService.editGroup(id, data);
        if (data && id) {
            res.status(200).send(`${data.name} group has been updated successfully`);
        } else {
            res.status(400).send('Bad Request');
        }
    },
    deleteGroup: (req, res) => {
        const { id } = req.params;
        groupService.deleteGroup(id);
        if (id) {
            res.status(200).send(`group has been deleted successfully`);
        } else {
            res.status(400).send('Bad Request');
        }
    },
    getUsers: (req,res) => {
        const data = groupService.getUsers();
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(400).send('Bad Request');
        }
    }

};
