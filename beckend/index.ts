import express from 'express';
import router from './router/router';
import { sequelize } from './database-models/index';

// Create a new express application instance
const app: express.Application = express();
// parse application/json
app.use(express.json());
app.use(router);


const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

sequelize.sync().then(async () => {
    app.listen(port, () =>
        console.log(`Example app listening on port ${port}!`),
    );
});

