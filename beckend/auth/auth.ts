import * as jwt from 'jsonwebtoken';
import * as userService from  '../services/user-service';
// import * as bcrypt  from 'bcryptjs';

export const authHandler = {

    async registerUser(req, res) {
        try {
            const data = req.body;
            const user = await userService.createUser(data);
            const token = jwt.sign({id: user._id}, process.env.secret, {
                expiresIn: 86400 // expires in 24 hours
            });

            res.status(200).send({auth: true, token: token});
        } catch (err) {
            res.status(400).send(`Bad Request: ${err}`);
        }
    },

    async getMe(req,res, next) {
        try {
            const user = await userService.getUserById(req.userId);
            if (!user) return res.status(404).send("No user found.");

            res.status(200).send(user);
        }catch (err) {
            next(err)
        }
    },

    async loginUser(req, res, next) {
        try {
            const user = await userService.getUser(req.body.login);
            if (!user) return res.status(404).send('No user found.');

            // const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            const passwordIsValid = req.body.password === user.password;
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

            const token = jwt.sign({ id: user._id }, process.env.secret, {
                expiresIn: 86400 // expires in 24 hours
            });

            res.status(200).send({ auth: true, token: token });
        }catch (err) {
            next(err)
        }
    },

    async logoutUser(req, res) {
        res.status(200).send({ auth: false, token: null });
    }
};