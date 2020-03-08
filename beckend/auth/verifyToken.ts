import * as jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    try {
        const token = req.headers['x-access-token'];
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

        jwt.verify(token, process.env.secret, (err, decoded) => {
            if (err)
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

            // if everything good, save to request for use in other routes
            req.userId = decoded.id;
            next();
        });
    }catch (err) {
        next(err)
    }
};